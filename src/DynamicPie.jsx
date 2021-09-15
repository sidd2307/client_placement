import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './DynamicPie.css'
import { DataGrid } from '@material-ui/data-grid'

export default function DynamicPie() {
    const [newCompanies, setNewCompanies] = useState([])

    useEffect(() => {
        const getNewCompanies = async () => {
            try {
                const res = await axios.get("/companies")
                setNewCompanies(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getNewCompanies()
    }, [])

    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        // {
        //     field: 'company',
        //     headerName: 'Company',
        //     width: 200,
        // },
        {
            field: 'name',
            headerName: 'Company',
            width: 160,
        },
        {
            field: 'students',
            headerName: 'Students',
            width: 160,
        },
    ];


    return (
        <div className="productList" style={{height: '100%', width: "600px"}}>
            <DataGrid
                rows={newCompanies}
                columns={columns}
                pageSize={20}
                checkboxSelection
                disableSelectionOnClick
                getRowId={r => r._id}
            />
        </div>
    )
}

{/* <div className="widgetSm">
            <span className="widgetSmTitle">Companies</span>
            <ul className="widgetSmList">
                {newCompanies && newCompanies.map(newCompany => (
                    <div className="item">
                        <li className="widgetSmListItem">
                            <div className="companyName">
                                <span className="widgetSmUsername">{newCompany.name}</span>
                            </div>
                            <div className="studentNum">
                                <span className="widgetSmUsername">{newCompany.students}</span>
                            </div>
                        </li>
                    </div>
                ))}
            </ul>
        </div> */}