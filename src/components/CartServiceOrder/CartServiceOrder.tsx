import { ICartOrder } from '@/types/cartOrder.type'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import Button from '../UI/Button/Button'
import StrokeInput from '../UI/StrokeInput/StrokeInput'
import StrokeTextarea from '../UI/StrokeTextarea/StrokeTextarea'
import cl from './CartServiceOrder.module.scss'

interface IProps {
	onClickBack: () => void
}

const emailPattern =
	/^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const CartServiceOrder: FC<IProps> = ({ onClickBack }) => {
	const navigate = useNavigate()

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<ICartOrder>({ mode: 'onBlur' })

	const onSubmit: SubmitHandler<ICartOrder> = async data => {
		navigate('/cart/checkout')
	}

	return (
		<form className={cl.wrapper} onSubmit={handleSubmit(onSubmit)}>
			<StrokeInput
				placeholder='Имя'
				{...register('name', { required: 'Обязательное поле' })}
				error={errors.name}
			/>
			<StrokeInput
				type='email'
				placeholder='E-mail'
				{...register('email', {
					required: 'Обязательное поле',
					pattern: {
						value: emailPattern,
						message: 'Некорректный email',
					},
				})}
				error={errors.email}
			/>
			<StrokeInput
				placeholder='Контактный телефон'
				{...register('phone', {
					required: 'Обязательное поле',
					pattern: {
						value: /^([+]?[0-9\s-\(\)]{3,25})*$/i,
						message: 'Только цифры и +. Пример: +79123456789',
					},
				})}
				error={errors.phone}
			/>
			<StrokeInput
				placeholder='Адрес доставки'
				{...register('address', { required: 'Обязательное поле' })}
				error={errors.address}
			/>
			<StrokeTextarea placeholder='Комментарий' {...register('comment')} />

			<div className={cl.buttons}>
				<p className={cl.backBtn} onClick={onClickBack}>
					Назад
				</p>
				<Button className={cl.orderBtn}>Отправить заказ</Button>
			</div>
		</form>
	)
}

export default CartServiceOrder
