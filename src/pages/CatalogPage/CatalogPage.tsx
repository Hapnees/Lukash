import { catalogCategoriesData } from '@/data/catalog.data'
import NavLayout from '@/layouts/NavLayout/NavLayout'
import { useNavigate } from 'react-router'
import cl from './CatalogPage.module.scss'

const CatalogPage = () => {
	const navigate = useNavigate()

	const onClickCategory = (href: string) => {
		navigate(href)
	}

	return (
		<NavLayout title='Каталог товаров'>
			<ul className={cl.list}>
				{catalogCategoriesData.map(el => (
					<li key={el.title} onClick={() => onClickCategory(el.href)}>
						<img src={el.img} alt='' />
						<p>{el.title}</p>
					</li>
				))}
			</ul>
		</NavLayout>
	)
}

export default CatalogPage
