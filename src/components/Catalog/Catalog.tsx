import { IProduct } from '@/types/catalog.type'
import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProductsGrid from '../ProductsGrid/ProductsGrid'
import cl from './Catalog.module.scss'

interface IProps {
	isHidetitle?: boolean
	catalogList: IProduct[]
}

const Catalog: FC<IProps> = ({ isHidetitle, catalogList }) => {
	const navigate = useNavigate()

	return (
		<section className={cl.wrapper}>
			{!isHidetitle && (
				<Link to='/catalog'>
					<h1 className='href'>Каталог товаров</h1>
				</Link>
			)}
			<ProductsGrid productsList={catalogList} />
		</section>
	)
}

export default Catalog
