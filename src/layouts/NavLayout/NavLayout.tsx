import { FC, PropsWithChildren } from 'react'
import cl from './NavLayout.module.scss'

interface IProps {
	title?: string
	titleElement?: React.ReactElement
	price?: string
	space?: string
}

const NavLayout: FC<PropsWithChildren<IProps>> = ({
	title,
	titleElement,
	space,
	price,
	children,
}) => {
	return (
		<main className={cl.main}>
			<div className={cl.space}></div>
			<div className={cl.header}>
				<h1 className={cl.title}>{title || titleElement}</h1>
				{price && <h2 className={cl.price}>{price}</h2>}
			</div>

			<article className={cl.content} style={{ paddingTop: space ?? '80px' }}>
				{children}
			</article>
		</main>
	)
}

export default NavLayout
