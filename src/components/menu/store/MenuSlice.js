import { createSlice } from '@reduxjs/toolkit'
import { fetchMenu } from './Menu.action'

const fetchMenuExtraReducer = {
    [fetchMenu.pending]: (state, action) => {
        state.loading = true
    },
    [fetchMenu.fulfilled]: (state, action) => {
        state.menu = action.payload;
        state.loading = false;
    },
    [fetchMenu.rejected]: (state, action) => {
        state.loading = false
    },
}

const MenuSlice = createSlice({
    name: 'Menu',
    initialState: {
        menu: [],
        loading: false,
    },
    reducer: {
        StoresAdded(state, action) {
            state.menu.push(action.payload)
        },
        
    },
    extraReducers: {
        ...fetchMenuExtraReducer,
        // ...addRestaurantExtraReducer,
        // ...editDoctorExtraReducer,
        // ...deleteDoctorExtraReducer,
    },
})

export const { StoresAdded } = MenuSlice.actions

export default MenuSlice.reducer
