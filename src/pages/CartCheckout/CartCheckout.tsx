import CheckIcon from '@/icons/CheckIcon'
import NavLayout from '@/layouts/NavLayout/NavLayout'
import cl from './CartCheckout.module.scss'

const CartCheckout = () => {
	return (
		<NavLayout title='Спасибо за заказ' space='50px'>
			<h1>Мы свяжемся с Вами в ближайшее время</h1>
			<div className={cl.checkIconWrapper}>
				<CheckIcon />
			</div>
			<a
				href='https://share.flocktory.com/exchange/login?ssid=3546&bid=5374'
				target='_blank'
			>
				<img
					src='//s.siteapi.org/frontend/assets/5c06f2d5a41de4b666635c15d685b2a1.png'
					alt=''
					className={cl.img}
				/>
			</a>
		</NavLayout>
	)
}

export default CartCheckout
