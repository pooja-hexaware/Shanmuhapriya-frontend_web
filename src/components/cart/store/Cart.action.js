import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const endPoint = 'Cart'

export const fetch = createAsyncThunk('Cart/fetchCart', async () => {
    const response = await axios.get('http://localhost:4000/cart/');
    const Cart = await response.data
    return Cart;
})

// export const addItems = createAsyncThunk(
//     'Doctor/addDoctor',
//     async (data, thunkAPI) => {
//         const response = await axios.post(`/${endPoint}`, data)
//         const Doctor = await response.data
//         thunkAPI.dispatch(showSuccess('Doctor added successfully'))
//         return Doctor
//     }
// )

// export const editDoctor = createAsyncThunk(
//     'Doctor/editDoctor',
//     async (data, thunkAPI) => {
//         const response = await axios.put(`/${endPoint}/${data.id}`, data)
//         const Doctor = await response.data
//         thunkAPI.dispatch(showSuccess('Doctor updated successfully'))
//         return Doctor
//     }
// )

// export const deleteDoctor = createAsyncThunk(
//     'Doctor/deleteDoctor',
//     async (data, thunkAPI) => {
//         const response = await axios.delete(`/${endPoint}/${data.id}`)
//         const status = await response.status
//         if (status === 200) {
//             thunkAPI.dispatch(
//                 showSuccess('Selected Doctor deleted successfully.')
//             )
//             return data.id
//         }
//     }
// )
