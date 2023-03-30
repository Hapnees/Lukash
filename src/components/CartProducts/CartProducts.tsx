import { useActions } from '@/hooks/useActions'
import { useAppSelector } from '@/hooks/useAppSelector'
import TrashIcon from '@/icons/TrashIcon'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import AmountInput from '../UI/AmountInput/AmountInput'
import Button from '../UI/Button/Button'
import cl from './CartProducts.module.scss'

interface IProps {
	onClickContinue: () => void
}

const CartProducts: FC<IProps> = ({ onClickContinue }) => {
	const { products } = useAppSelector(state => state.cart)
	const { changeAmount, removeProduct } = useActions()

	const onClickMinus = (id: number) => {
		const product = products.find(el => el.id === id)
		if (product) {
			const isLessOrEqThenZero = product.amount - 1 <= 0
			if (isLessOrEqThenZero) return

			changeAmount({ id, amount: product.amount - 1 })
		}
	}

	const onClickPlus = (id: number) => {
		const product = products.find(el => el.id === id)
		if (product) {
			changeAmount({ id, amount: product.amount + 1 })
		}
	}

	return (
		<>
			<ul className={cl.productList}>
				{products.map(product => (
					<li>
						<div className={cl.leftSide}>
							<img src={product.src} alt='' />
							<div>
								<p>
									<Link to={`/catalog/${product.category}/${product.id}`}>
										{product.title}
									</Link>
								</p>
								<p className={cl.typeSize}>
									Единица измерения: {product.typeSize}
								</p>
							</div>
						</div>

						<div className={cl.rightSide}>
							<p className={cl.price}>{product.price} руб</p>
							<AmountInput
								style={{ textAlign: 'start', border: '1px solid #b2bcc3' }}
								value={product.amount}
								onChange={event =>
									changeAmount({
										id: product.id,
										amount: +event.target.value,
									})
								}
							/>
							<div
								className={cl.minusIcon}
								onClick={() => onClickMinus(product.id)}
							></div>
							<div
								className={cl.plusIcon}
								onClick={() => onClickPlus(product.id)}
							></div>

							<p className={`${cl.price} ${cl.totalPrice}`}>
								{(product.price * product.amount).toFixed(2)} руб
							</p>

							<div onClick={() => removeProduct(product.id)}>
								<TrashIcon />
							</div>
						</div>
					</li>
				))}
			</ul>

			<div className={cl.resultPriceContainer}>
				<div className={cl.resultPriceInfo}>
					<p>Итого:</p>
					<p>
						{`${products.reduce(
							(accum, item) => accum + item.price * item.amount,
							0
						)} руб`}
					</p>
				</div>

				<Button style={{ width: '100%' }} onClick={onClickContinue}>
					Продолжить
				</Button>
			</div>
		</>
	)
}

export default CartProducts
