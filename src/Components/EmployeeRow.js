import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { removeEmployee } from '../features/Employee/EmployeesSlice';

const EmployeeRow = (props) => {

    const dispatch = useDispatch()

    return (
        <>
          <div className="intro-x">
                <div className="zoom-in">
                    <div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 text-black dark:bg-theme-1">
                        <div className="w-12 h-12 flex-none image-fit mr-1">
                            <img alt={ props.name } className="rounded-full" src={'/temp.jpg'} />
                        </div>
                        <div className="ml-2 overflow-hidden mr-5">
                            <Link to={`/employee/${props.index}`}>
                                <span className="font-medium hover:text-gray-500">{ props.name }</span>
                            </Link>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={ () => dispatch(removeEmployee(props.index)) }>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeRow
