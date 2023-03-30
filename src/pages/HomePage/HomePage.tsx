import FormScreen from '@/components/HomePage/FormScreen/FormScreen'
import PopularCatProducts from '@/components/HomePage/PopularCatProducts/HomePageScreen1'
import Catalog from '@/components/Catalog/Catalog'
import cl from './HomePage.module.scss'
import OurAdvantages from '@/components/HomePage/OurAdvantages/OurAdvantages'
import Services from '@/components/Services/Services'
import News from '@/components/HomePage/News/News'
import ContactInfo from '@/components/ContactInfo/ContactInfo'
import SocialWebs from '@/components/SocialWebs/SocialWebs'
import { productsData } from '@/data/catalog.data'

const HomePage = () => {
	const titleProducts = [
		'Мышка',
		'Смарт-колонка',
		'Беспроводные наушники',
		'Принтер',
	]

	const data = productsData.filter(product =>
		titleProducts.includes(product.title)
	)

	return (
		<main className={cl.main}>
			<PopularCatProducts />
			<OurAdvantages />
			<Catalog catalogList={data} />
			<FormScreen />
			<Services />
			<News />
			<ContactInfo />
			<SocialWebs />
		</main>
	)
}

export default HomePage
