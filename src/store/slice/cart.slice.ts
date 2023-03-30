import { IProduct, IProductSlice } from '@/types/catalog.type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SetStateAction } from 'react'

interface IState {
	products: IProductSlice[]
}

const initialState: IState = { products: [] }

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<IProduct>) => {
			const oldProduct = state.products.find(el => el.id === action.payload.id)

			if (oldProduct) {
				oldProduct.amount++
				return
			}

			state.products.push({ ...action.payload, amount: 1 })
		},
		removeProduct: (state, action: PayloadAction<number>) => {
			state.products = state.products.filter(el => el.id !== action.payload)
		},
		changeAmount: (
			state,
			action: PayloadAction<{ id: number; amount: number }>
		) => {
			const product = state.products.find(el => el.id === action.payload.id)
			if (product) product.amount = action.payload.amount
		},
	},
})

export default cartSlice
