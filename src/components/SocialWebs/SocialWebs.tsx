import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cl from './SocialWebs.module.scss'

interface IProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	backgroundColor?: string
}

const SocialWebs: FC<IProps> = ({
	backgroundColor = '#dce9ff',
	style,
	...props
}) => {
	return (
		<section className={cl.wrapper} style={{ backgroundColor, ...style }}>
			<h1 className={`title ${cl.title}`}>Мы в социальных сетях</h1>

			<div className={cl.icons}>
				<img
					src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpnggrid.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fsquare-telegram-768x701.png&f=1&nofb=1&ipt=a7d972645234f55ae7b2a86d5c3a42a5dc33673e6781d72de32a48562a790597&ipo=images'
					alt=''
				/>
				<img
					src='https://voermans-cillekens.nl/wp-content/uploads/2021/01/whatsapp-icon.png'
					alt=''
				/>
			</div>
		</section>
	)
}

export default SocialWebs
