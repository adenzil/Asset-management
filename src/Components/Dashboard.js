import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addEmployee } from '../features/Employee/EmployeesSlice';
import EmployeeRow from './EmployeeRow';
import {
    Routes,
    Route
} from "react-router-dom";
import EmployeeDetails from './EmployeeDetails';

const Dashboard = () => {
    
    const [newEmployee, setNewEmployee] = useState("");
    const employees = useSelector((state) => state.employees.value)
    const dispatch = useDispatch()

    return (
        <>
            <div className="side-content col-span-12 xl:col-span-3 -mt-16 xl:mt-0 pt-20 xl:-mr-6 px-6 xl:pt-6 side-content--active flex-row overflow-hidden" data-content="chats">
                <div className="flex flex-col">
                    <h3 className="flex">Add new employee</h3>
                    <form
                        className="mt-5"
                        onSubmit={(e) => {
                            e.preventDefault()
                            if(!newEmployee) return
                            dispatch(addEmployee({
                                name: newEmployee,
                                linkedAssets: []
                            }))
                            setNewEmployee("")
                        }}
                        >
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input 
                            id="name"
                            type="text"
                            placeholder="Name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            value={ newEmployee }
                            onChange={e => setNewEmployee(e.target.value)}>
                        </input>
                    </form>
                </div>
                <div className="flex">
                    <div className="intro-y overflow-y-auto scrollbar-hidden pt-2 mt-3 -mx-5 px-5">
                    {
                        employees.map((employee, index) => <EmployeeRow name={employee.name} index={index} key={index} />)
                    }
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="employee/:employeeId" element={<EmployeeDetails />} />
            </Routes>
        </>
    )
}

export default Dashboard
