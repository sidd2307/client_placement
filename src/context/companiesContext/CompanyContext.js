import { createContext, useReducer } from "react";
import CompanyReducer from "./CompanyReducer";

const INITIAL_STATE = {
    company: [],
    isFetching: false,
    error: false
}

export const CompanyContext = createContext(INITIAL_STATE)

export const CompanyContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CompanyReducer, INITIAL_STATE)

    return (
        <CompanyContext.Provider value={{ company: state.company, isFetching: state.isFetching, error: state.error, dispatch }}> {children}</CompanyContext.Provider >
    )
}