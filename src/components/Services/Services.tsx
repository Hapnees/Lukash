import Button from '@/components/UI/Button/Button'
import { servicesData } from '@/data/services.data'
import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../Modal/Modal'
import ServiceOrder from '../ServiceOrder/ServiceOrder'
import cl from './Services.module.scss'

interface IProps {
	isHideTitle?: boolean
}

const Services: FC<IProps> = ({ isHideTitle }) => {
	const navigate = useNavigate()
	const [isViewModal, setIsViewModal] = useState(false)

	const onClickService = (id: number) => {
		navigate(`/services/${id}`)
	}

	return (
		<section className={cl.wrapper}>
			{!isHideTitle && (
				<Link to='/services'>
					<h1 className='href'>Услуги</h1>
				</Link>
			)}
			<ul className={cl.list}>
				{servicesData.map(el => (
					<li key={el.title} onClick={() => onClickService(el.id)}>
						<img src={el.src} alt='' />
						<div className={cl.info}>
							<p className={cl.listTitle}>{el.title}</p>
							<p className={cl.price}>{el.price}</p>
						</div>
					</li>
				))}
			</ul>
			<Button onClick={() => setIsViewModal(true)}>Оформить заказ</Button>

			{isViewModal && (
				<Modal>
					<ServiceOrder closeModal={() => setIsViewModal(false)} />
				</Modal>
			)}
		</section>
	)
}

export default Services
