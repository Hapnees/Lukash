import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cl from './BreadCrumbs.module.scss'

interface IProps {
	title: string
	href?: string
	mainTitle?: string
	mainHref?: string
}

const BreadCrumbs: FC<IProps> = ({ title, href, mainTitle, mainHref }) => {
	const navigate = useNavigate()

	const onClickTitle = () => {
		if (!href) return
		navigate(href)
	}

	return (
		<ul className={cl.list}>
			<li>
				<Link to={`${mainHref || '/catalog'}`}>{`${
					mainTitle || 'Каталог товаров'
				}`}</Link>
			</li>
			<li>/</li>
			<li onClick={onClickTitle} className={href ? cl.pointer : ''}>
				{title}
			</li>
		</ul>
	)
}

export default BreadCrumbs
