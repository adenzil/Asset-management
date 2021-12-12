import { createSlice } from "@reduxjs/toolkit";

const LOCAL_STORAGE_ASSETS_KEY = "assets"

const getAssetsFromLocalStorage = () => {
    let assets = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ASSETS_KEY));
    return assets ? assets : [];
}

const setAssetsToLocalStorage = (assets) => {
    localStorage.setItem(LOCAL_STORAGE_ASSETS_KEY, JSON.stringify(assets));
}

const initialState = {
    value: getAssetsFromLocalStorage()
}

export const AssetsSlice = createSlice({
    name: "assets",
    initialState,
    reducers: {
        addAsset: (state, action) => {
            state.value.push(action.payload)
            setAssetsToLocalStorage(state.value)
        },
        removeAsset: (state, action) => {
            state.value.splice(action.payload, 1)
            setAssetsToLocalStorage(state.value)
        }
    }
})

export const { addAsset, removeAsset } = AssetsSlice.actions
export default AssetsSlice.reducer