import Services from '@/components/Services/Services'
import NavLayout from '@/layouts/NavLayout/NavLayout'

const ServicesPage = () => {
	return (
		<NavLayout title='Услуги'>
			<Services isHideTitle={true} />
		</NavLayout>
	)
}

export default ServicesPage
