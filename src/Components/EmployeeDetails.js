import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { linkAsset } from '../features/Employee/EmployeesSlice';

const EmployeeDetails = () => {
    
    let params = useParams();
    const dispatch = useDispatch()
    const selectAssetRef = useRef([]);
    const employees = useSelector((state) => state.employees.value)
    const assets = useSelector((state) => state.assets.value)
    const employee = employees[params.employeeId]
    const [editLinkedAssets, setEditLinkedAssets] = useState(false)

    const linkAssetToEmployee = () => {
        dispatch(linkAsset({
            employeeId : params.employeeId,
            assetIds : Array.from(selectAssetRef.current.options).filter(option => option.selected).map(option => parseInt(option.value))
        }))
        setEditLinkedAssets(false)
    }

    return (
        <>
            <div className='pt-20 mx-5'>
                <h3 className='text-3xl mb-5'>Employee details</h3>
                <div className='text-xl mb-5'>
                    Name : { employee.name }
                </div>
                
                { editLinkedAssets ?
                    <div className='text-xl mb-5'>
                        <label className="block text-left">
                            <span className="text-gray-700">Assets</span>
                            <select ref={ selectAssetRef } className="form-multiselect block w-full mt-3 mb-5" multiple defaultValue={ employee.linkedAssets }>
                                { assets?.map((asset, index) => <option key={index} value={index}>{ asset.name }</option>) }
                            </select>
                            <button onClick={ linkAssetToEmployee } className='text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' type='button'>Link Asset</button>
                        </label>
                    </div>
                    :
                    <div className='text-xl mb-5'>
                        <label className="block text-left">
                            <span className="text-gray-700 flex mr-3">
                                Linked Assets
                                <svg onClick={(e) => setEditLinkedAssets(true)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </span>
                            <div className='mt-3'>
                                <ul className='list-decimal list-inside'>
                                    { assets.filter((asset, index)=> employee.linkedAssets.includes(index) ).map((asset,index) => <li key ={index} >{ asset.name }</li>) }
                                </ul>
                            </div>
                        </label>
                    </div>
                }
            </div>
        </>
    )
}

export default EmployeeDetails
