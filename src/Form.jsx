import React, { useContext, useState } from 'react'
import './Form.css'

import { createCompany } from '../src/context/companiesContext/apiCalls';
import { CompanyContext } from '../src/context/companiesContext/CompanyContext'

export default function Form() {
    const [company, setCompany] = useState(null)

    const { dispatch } = useContext(CompanyContext)

    const handleChange = (e) => {
        const value = e.target.value
        setCompany({ ...company, [e.target.name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createCompany(company, dispatch)
    }

    return (
        <div className="form">
            <div className="addCompany">
                <label>Company</label>
                <input type="text" placeholder="Company" name="name"
                    onChange={handleChange}
                />
            </div>
            <div className="addStudents">
                <label>No of Students</label>
                <input type="text" placeholder="Students" name="students"
                    onChange={handleChange}
                />
            </div>

            <button className="addProductButton"
                onClick={handleSubmit}
            >Create</button>
        </div>
    )
}
