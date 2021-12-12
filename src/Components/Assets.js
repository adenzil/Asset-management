import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addAsset } from '../features/Asset/AssetsSlice';
import AssetRow from '../Components/AssetRow'

const Assets = () => {
    
    const [newAsset, setNewAsset] = useState("")
    const assets = useSelector((state) => state.assets.value)
    const dispatch = useDispatch()

    return (
        <>
            <div className="side-content col-span-12 xl:col-span-3 -mt-16 xl:mt-0 pt-20 xl:-mr-6 px-6 xl:pt-6 side-content--active flex-row overflow-hidden" data-content="chats">
                <div className="flex flex-col">
                    <h3 className="flex">Add new Asset</h3>
                    <form
                        className="mt-5"
                        onSubmit={(e) => {
                            e.preventDefault()
                            if(!newAsset) return
                            dispatch(addAsset({
                                name: newAsset
                            }))
                            setNewAsset("")
                        }}
                        >
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input 
                            id="name"
                            type="text"
                            placeholder="Name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            value={ newAsset }
                            onChange={e => setNewAsset(e.target.value)}>
                        </input>
                    </form>
                    <div className="flex">
                        <div className="intro-y overflow-y-auto scrollbar-hidden pt-2 mt-3 -mx-5 px-5">
                        {
                            assets.map((asset,index) => <AssetRow name={asset.name} index={index} key={index} />)
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Assets
