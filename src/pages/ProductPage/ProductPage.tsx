import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import SmartSpeaker from '@/components/ProductPage/SmartSpeaker/SmartSpeaker'
import Button from '@/components/UI/Button/Button'
import { productsData } from '@/data/catalog.data'
import NavLayout from '@/layouts/NavLayout/NavLayout'
import { ECategory } from '@/types/category.type'
import { useParams } from 'react-router'
import cl from './ProductPage.module.scss'

const ProductPage = () => {
	const { id, category } = useParams<{
		category: keyof typeof ECategory
		id: string
	}>()

	const product = id
		? productsData.find(product => product.id === +id)
		: undefined

	const additionalContent =
		product && [2, 3].includes(product.id) ? <SmartSpeaker /> : undefined

	if (!product) return <h1 className='title'>Товар не найден</h1>

	return (
		<NavLayout title={product.title} space='20px'>
			<BreadCrumbs
				title={category ? ECategory[category] : ''}
				href={`/catalog/${category}`}
			/>

			<article className={cl.wrapper}>
				<img src={product.src} alt='' className={cl.img} />

				<div className={cl.info}>
					<h1 className={cl.title}>{product.title}</h1>
					<p className={cl.price}>{product.price} ₽</p>

					<Button>В корзину</Button>

					{product.description && (
						<p className={cl.description}>{product.description}</p>
					)}

					{additionalContent}
				</div>
			</article>
		</NavLayout>
	)
}

export default ProductPage
