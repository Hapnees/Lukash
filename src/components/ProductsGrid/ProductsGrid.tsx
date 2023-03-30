import { useActions } from '@/hooks/useActions'
import { IProduct } from '@/types/catalog.type'
import { FC, MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router'
import cl from './ProductsGrid.module.scss'

interface IProps {
	productsList: IProduct[]
}

const ProductsGrid: FC<IProps> = ({ productsList }) => {
	const [isClickedProduct, setIsClickedProduct] = useState(false)
	const [clickedEl, setIsClickedEl] = useState<IProduct>()

	const { addProduct } = useActions()
	const navigate = useNavigate()

	const onClickAddCart = (
		event: MouseEvent<HTMLButtonElement>,
		product: IProduct
	) => {
		event.stopPropagation()
		addProduct(product)

		setIsClickedProduct(true)
		setIsClickedEl(product)

		const timer = setTimeout(() => {
			setIsClickedProduct(false)
			clearTimeout(timer)
		}, 1500)
	}

	return (
		<ul className={cl.list}>
			{productsList?.map(product => (
				<li
					key={product.title}
					onClick={() => navigate(`/catalog/${product.category}/${product.id}`)}
				>
					<img src={product.src} alt='' />
					<p className={cl.title}>{product.title}</p>
					<p className={cl.price}>
						{product.promo && (
							<span className={cl.promo}>{product.promo} ₽</span>
						)}{' '}
						<span className={product.promo ? cl.lineThrough : ''}>
							{product.price} ₽
						</span>
					</p>
					<button
						className={cl.button}
						onClick={event => onClickAddCart(event, product)}
					>
						В корзину
					</button>
					<p
						className={cl.addedProduct}
						style={{
							opacity: isClickedProduct && clickedEl?.id === product.id ? 1 : 0,
						}}
					>
						Товар добавлен
					</p>
				</li>
			))}
		</ul>
	)
}

export default ProductsGrid
