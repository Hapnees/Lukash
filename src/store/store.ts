import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import cartSlice from './slice/cart.slice'

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
})

const store = configureStore({ reducer: rootReducer })

export default store
export type TypeRootState = ReturnType<typeof store.getState>
export type TypeDispatch = typeof store.dispatch
