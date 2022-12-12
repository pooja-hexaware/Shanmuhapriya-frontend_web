// import { createSlice } from '@reduxjs/toolkit'
// import { fetchCart } from './Cart.action'

// // const fetchCartExtraReducer = {
// //     [fetchCart.pending]: (state, action) => {
// //         state.loading = true
// //     },
// //     [fetchCart.fulfilled]: (state, action) => {
// //         state.menu = action.payload;
// //         state.loading = false;
// //     },
// //     [fetchCart.rejected]: (state, action) => {
// //         state.loading = false
// //     },
// // }

// const initialCartItems = {
//   item: "",
//   base_price: "",
//   quantity: "",
//   toppings: [],
//   priceWithQuantity: "",
// }

// const CartSlice = createSlice({
//     name: 'Cart',
//     initialState: {
//         cartItems: initialCartItems,
//         cart:[],
//         loading: false,
//     },
//     reducer: {
//       addToCart: (state, action) => {
//         const itemExists = state.find((itemName) => itemName.item === action.payload.item);
//         if (itemExists) {
//           itemExists.quantity++;
//         } else {
//           state.cart.push({ ...action.payload, quantity: 1 });
//         }
//       },
//     incrementQuantity: (state, action) => {
//       const itemIncre = state.find((itemName) => itemName.item === action.payload);
//       itemIncre.quantity++;
//     },
//     decrementQuantity: (state, action) => {
//       const itemDecre = state.find((itemName) => itemName.item === action.payload);
//       if (itemDecre.quantity === 1) {
//         const index = state.findIndex((itemName) => itemName.item === action.payload);
//         state.splice(index, 1);
//       } else {
//         itemDecre.quantity--;
//       }
//     },
//     removeFromCart: (state, action) => {
//       const index = state.findIndex((itemName) => itemName.item === action.payload);
//       state.splice(index, 1);
//     },
//   },
// });

// export const cartReducer = CartSlice.reducer;

// export const {
//   addToCart,
//   incrementQuantity,
//   decrementQuantity,
//   removeFromCart,
// } = CartSlice.actions;

// export default CartSlice.reducer



import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({

    name: "cartSlice",

    initialState: {

        cartItems: {},

        totalPrice: 0,

    },

    reducers: {

        addCartItem: (state, action) => {

            const item = action.payload;

            Object.assign(state.cartItems, {

                [item.name]: {
                    price: item.price,
                    quantity: item.quantity
                }

            })

        }

    }

})



export const { addCartItem } = cartSlice.actions;



export default cartSlice.reducer;