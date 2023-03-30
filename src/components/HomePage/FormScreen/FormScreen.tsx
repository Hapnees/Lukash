import Button from '@/components/UI/Button/Button'
import Input from '@/components/UI/Input/Input'
import { IFormHomePage } from '@/types/form.type'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import cl from './FormScreen.module.scss'

const emailPattern =
	/^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const FormScreen = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<IFormHomePage>({ mode: 'onBlur' })

	const [isSubmitted, setIsSubmitted] = useState(false)

	const onSubmit: SubmitHandler<IFormHomePage> = async data => {
		toast.success('Форма успешно отправлена')
		setIsSubmitted(true)
	}

	return (
		<section className={cl.wrapper}>
			<h1 className={cl.title}>Заполните форму</h1>

			<p className={cl.subtitle} style={{ marginBottom: '35px' }}>
				Оставьте заявку прямо сейчас, мы свяжемся с вами незамедлительно!
			</p>

			{isSubmitted ? (
				<p className={cl.subtitle}>Форма успешно отправлена</p>
			) : (
				<form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
					<div className={cl.inputList}>
						<Input
							placeholder='Ваше имя'
							{...register('name', { required: 'Обязательное поле' })}
							error={errors.name}
						/>
						<Input
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
						<Input
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
					</div>

					<Button>Отправить заявку</Button>
				</form>
			)}
		</section>
	)
}

export default FormScreen
