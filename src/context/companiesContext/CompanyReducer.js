const CompanyReducer = (state, action) => {
    switch (action.type) {
        case "CREATE_COMPANY_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            }
        case "CREATE_COMPANY_SUCCESS":
            return {
                company: [...state.company, action.payload],
                isFetching: false,
                error: false,
            }
        case "CREATE_COMPANY_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            }
        default:
            return { ...state }
    }
}

export default CompanyReducer