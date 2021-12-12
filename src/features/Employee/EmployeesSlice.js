import { createSlice } from "@reduxjs/toolkit";

const LOCAL_STORAGE_EMPLOYEES_KEY = "employees"

const getEmployeesFromLocalStorage = () => {
    let employees = JSON.parse(localStorage.getItem(LOCAL_STORAGE_EMPLOYEES_KEY));
    return employees ? employees : [];
}

const setEmployeesToLocalStorage = (employees) => {
    localStorage.setItem(LOCAL_STORAGE_EMPLOYEES_KEY, JSON.stringify(employees));
}

const initialState = {
    value: getEmployeesFromLocalStorage()
}

export const EmployeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.value.push(action.payload)
            setEmployeesToLocalStorage(state.value)
        },
        removeEmployee: (state, action) => {
            state.value.splice(action.payload, 1)
            setEmployeesToLocalStorage(state.value)
        },
        linkAsset: (state, action) => {
            state.value[action.payload.employeeId].linkedAssets = action.payload.assetIds
            setEmployeesToLocalStorage(state.value)
        }
    }
})

export const { addEmployee, removeEmployee, linkAsset } = EmployeesSlice.actions
export default EmployeesSlice.reducer