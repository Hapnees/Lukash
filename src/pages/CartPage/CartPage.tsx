import NavLayout from '@/layouts/NavLayout/NavLayout'
import cl from './CartPage.module.scss'
import CartProducts from '@/components/CartProducts/CartProducts'
import { useState } from 'react'
import CartServiceOrder from '@/components/CartServiceOrder/CartServiceOrder'

const CartPage = () => {
	const [isClickedContinue, setIsClickedContinue] = useState(false)

	return (
		<NavLayout title='Корзина' space='20px'>
			<section className={cl.wrapper}>
				<ul className={cl.topDecor}>
					<li style={{ opacity: isClickedContinue ? 0.5 : 1 }}>
						<p>1</p>
						<p>Товары</p>
					</li>
					<li style={{ opacity: isClickedContinue ? 1 : 0.5 }}>
						<p>2</p>
						<p>Контакты</p>
					</li>
				</ul>

				{!isClickedContinue ? (
					<CartProducts onClickContinue={() => setIsClickedContinue(true)} />
				) : (
					<CartServiceOrder onClickBack={() => setIsClickedContinue(false)} />
				)}
			</section>
		</NavLayout>
	)
}

export default CartPage
