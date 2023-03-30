import { useActions } from '@/hooks/useActions'
import { useAppSelector } from '@/hooks/useAppSelector'
import ArrowIcon from '@/icons/ArrowIcon'
import CartIcon from '@/icons/CartIcon'
import MailIcon from '@/icons/MailIcon'
import PhoneIcon from '@/icons/PhoneIcon'
import TrashIcon from '@/icons/TrashIcon'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AmountInput from '../UI/AmountInput/AmountInput'
import Button from '../UI/Button/Button'
import cl from './Header.module.scss'

const Header = () => {
	const { products } = useAppSelector(state => state.cart)
	const { changeAmount, removeProduct } = useActions()
	const navigate = useNavigate()

	const { pathname } = useLocation()
	const [isShowCart, setIsShowCart] = useState(false)

	const onClickCheckoutOrder = () => {
		navigate('/cart')
		setIsShowCart(false)
	}

	const tabs = [
		{ title: 'Главная', href: '' },
		{ title: 'Каталог товаров', href: 'catalog' },
		{ title: 'Услуги', href: 'services' },
		{ title: 'Новости', href: 'news' },
		{ title: 'Контакты', href: 'contacts' },
	]

	const specificClassName = (href: string) =>
		(href === '' && pathname === '/') ||
		(pathname.includes(href) && href !== '')
			? cl.active
			: ''

	return (
		<header className={cl.header}>
			{/*TOP CONTENT*/}
			<section className={cl.topContent}>
				<div className={`greenHref ${cl.block}`}>
					<PhoneIcon />
					<p>+7 995 9854857</p>
				</div>

				<div className={`greenHref ${cl.block}`}>
					<MailIcon />
					<p>НАПИШИТЕ НАМ</p>
				</div>
			</section>

			{/*BOTTOM CONTENT*/}
			<section className={cl.buttonContent}>
				<Link to='/'>
					<img
						src='//i.siteapi.org/uvp1uu4W9JMAH9XK9vPCgVR-ApY=/0x0:493x485/fit-in/215x128/s2.siteapi.org/2ec3f34292e0494/logo/ly5ezeerc1swcckogw00kk8wc0sos4'
						alt=''
					/>
				</Link>

				<nav>
					<ul className={cl.navList}>
						{tabs.map(tab => (
							<li key={tab.title}>
								<Link
									to={`/${tab.href}`}
									className={specificClassName(tab.href)}
								>
									{tab.title}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<article className={cl.cartWrapper}>
					<div className={cl.cart} onClick={() => setIsShowCart(!isShowCart)}>
						<CartIcon />
						<p>{products.reduce((accum, item) => accum + item.amount, 0)}</p>
						<ArrowIcon />
					</div>

					{isShowCart && (
						<div className={cl.cartContent}>
							{!products.length ? (
								<p className={cl.emptyCartTitle}>Корзина пуста</p>
							) : (
								<>
									<ul className={cl.productList}>
										{products.map(product => (
											<li key={product.id}>
												<div className={cl.leftSide}>
													<img
														src={product.src}
														alt=''
														className={cl.productImg}
													/>
													<p>
														<Link
															to={`/catalog/${product.category}/${product.id}`}
														>
															{product.title}
														</Link>
													</p>
												</div>
												<div className={cl.rightSide}>
													<AmountInput
														type='number'
														value={product.amount}
														onChange={event =>
															changeAmount({
																id: product.id,
																amount: +event.target.value,
															})
														}
													/>
													<div
														className={cl.trashIconWrapper}
														onClick={() => removeProduct(product.id)}
													>
														<TrashIcon />
													</div>
												</div>
											</li>
										))}
									</ul>

									<div className={cl.buttonsCart}>
										<button
											className={cl.buttonContinue}
											onClick={() => setIsShowCart(false)}
										>
											Продолжить покупки
										</button>
										<Button
											className={cl.buttonServiceOrder}
											onClick={onClickCheckoutOrder}
										>
											Оформить заказ
										</Button>
									</div>
								</>
							)}
						</div>
					)}
				</article>
			</section>
		</header>
	)
}

export default Header
