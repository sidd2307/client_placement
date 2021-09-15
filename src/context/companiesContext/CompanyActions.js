// Create Movies
export const createCompanyStart = () => ({
    type: "CREATE_COMPANY_START",
})

export const createCompanySuccess= (company) => ({
    type: "CREATE_COMPANY_SUCCESS",
    payload: company,
})

export const createCompanyFailure = () => ({
    type: "CREATE_COMPANY_FAILURE",
})
