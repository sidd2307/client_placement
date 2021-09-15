import axios from 'axios'
import { createCompanyFailure, createCompanyStart, createCompanySuccess } from "./CompanyActions"

export const createCompany = async (company, dispatch) => {
    dispatch(createCompanyStart())
    try {
        const res = await axios.post("/companies", company)
        dispatch(createCompanySuccess(res.data))
    } catch (error) {
        dispatch(createCompanyFailure())
    }
}