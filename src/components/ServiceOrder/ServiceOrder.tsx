import { servicesData } from '@/data/services.data'
import CloseIcon from '@/icons/CloseIcon'
import FileIcon from '@/icons/FileIcon'
import PaperIcon from '@/icons/PaperIcon'
import { IFormServiceOrder } from '@/types/form.type'
import isFileValid from '@/validators/file.validator'
import { FC, KeyboardEvent, MouseEvent, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import Button from '../UI/Button/Button'
import StrokeInput from '../UI/StrokeInput/StrokeInput'
import StrokeTextarea from '../UI/StrokeTextarea/StrokeTextarea'
import cl from './ServiceOrder.module.scss'

interface IProps {
	closeModal: () => void
}

const ServiceOrder: FC<IProps> = ({ closeModal }) => {
	const services = servicesData
	const [file, setFile] = useState<File>()

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<IFormServiceOrder>({ mode: 'onBlur' })

	const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) return

		const file = event.target.files[0]

		if (!isFileValid(file.name)) {
			toast.error(
				`Файл \"${file.name}\" не загружен. Допустимые расширения: doc, docx, xls, xlsx, pdf, jpg, jpeg, png, zip, rar`
			)
			return
		}

		setFile(file)
	}

	const onSubmit: SubmitHandler<IFormServiceOrder> = async data => {
		closeModal()
		toast.success('Форма успешно отправлена')
	}

	const onClickCancel = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		closeModal()
	}

	return (
		<article className={cl.wrapper}>
			<div className={cl.closeIcon} onClick={closeModal}>
				<CloseIcon />
			</div>
			<h1 className={cl.title}>ЗАКАЗ УСЛУГ</h1>

			<form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
				<div>
					<select
						className={cl.selector}
						{...register('service', { required: 'Выберите услугу' })}
					>
						<option value=''>Выберите услугу:</option>
						{services.map(service => (
							<option key={service.id} value={service.title}>
								{service.title}
							</option>
						))}
						{errors.service?.message && <p>{errors.service.message}</p>}
					</select>
				</div>

				<StrokeInput
					placeholder='Имя'
					{...register('name', { required: 'Обязательно поле' })}
					error={errors.name}
				/>
				<StrokeInput
					type='email'
					placeholder='E-mail'
					{...register('email', { required: 'Обязательно поле' })}
					error={errors.email}
				/>
				<StrokeInput
					placeholder='Контактный телефон'
					{...register('phone', {
						required: 'Обязательно поле',
						pattern: {
							value: /^([+]?[0-9\s-\(\)]{3,25})*$/i,
							message: 'Только цифры и +. Пример: +79123456789',
						},
					})}
					error={errors.phone}
				/>
				<StrokeTextarea placeholder='Комментарий' {...register('comment')} />

				{file ? (
					<div className={cl.selectedFile}>
						<PaperIcon />
						<div>
							<p className={cl.fileName}>{file.name}</p>
							<p className={cl.fileSize}>{Math.round(file.size / 1024)} кб</p>
						</div>
					</div>
				) : (
					<div className={cl.file}>
						<input
							type='file'
							id='file'
							accept='doc, docx, xls, xlsx, pdf, jpg, jpeg, gif, png, zip, rar'
							onChange={onChangeFile}
						/>
						<label htmlFor='file'>
							<FileIcon />
							<p>Прикрепить файл</p>
						</label>
					</div>
				)}

				<div className={cl.buttons}>
					<button
						className={cl.cancelButton}
						onClick={event => onClickCancel(event)}
					>
						Отмена
					</button>
					<Button className={cl.submitButton}>Отправить</Button>
				</div>
			</form>
		</article>
	)
}

export default ServiceOrder
