export interface IProduct {
	id: number
	src: string
	title: string
	category: string
	price: number
	promo?: number
	description?: string
	typeSize: string
}

export interface IProductSlice extends IProduct {
	amount: number
}
