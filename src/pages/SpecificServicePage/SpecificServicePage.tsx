import { useParams } from 'react-router'
import NavLayout from '@/layouts/NavLayout/NavLayout'
import cl from './SpecificServicePage.module.scss'
import { servicesData } from '@/data/services.data'
import Button from '@/components/UI/Button/Button'

const SpecificServicePage = () => {
	const params = useParams<{ id: string }>()

	const currentService = params?.id
		? servicesData.find(el => el.id === +params.id!)
		: undefined

	return (
		<NavLayout title={currentService?.title} price={currentService?.price}>
			<p className={cl.description}>{currentService?.description}</p>

			<Button className={cl.button}>Оформить заказ</Button>
		</NavLayout>
	)
}

export default SpecificServicePage
