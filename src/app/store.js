import { configureStore } from '@reduxjs/toolkit'

import EmployeeReducer from '../features/Employee/EmployeesSlice'
import AssetReducer from '../features/Asset/AssetsSlice'

export const store = configureStore({
  reducer: {
    employees: EmployeeReducer,
    assets: AssetReducer
  },
})
