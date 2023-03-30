import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import Catalog from '@/components/Catalog/Catalog'
import { productsData } from '@/data/catalog.data'
import NavLayout from '@/layouts/NavLayout/NavLayout'
import { ECategory } from '@/types/category.type'
import { useParams } from 'react-router'
import cl from './CategoryPage.module.scss'

const CategoryPage = () => {
	const { category } = useParams<{ category: keyof typeof ECategory }>()
	const resultTitle = category ? ECategory[category] : ''
	const data = productsData.filter(product => product.category === category)

	return (
		<NavLayout title={resultTitle} space='20px'>
			<BreadCrumbs title={resultTitle} />
			<Catalog catalogList={data} isHidetitle={true} />
		</NavLayout>
	)
}

export default CategoryPage
