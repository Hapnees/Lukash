import ClockIcon from '@/icons/ClockIcon'
import Mail2Icon from '@/icons/Mail2Icon'
import Phone2Icon from '@/icons/Phone2Icon'
import PointerIcon from '@/icons/PointerIcon'
import TelegramIcon from '@/icons/TelegramIcon'
import WhatsappIcon from '@/icons/WhatsappIcon'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import cl from './ContactInfo.module.scss'

interface IProps {
	isHideTitle?: boolean
}

const ContactInfo: FC<IProps> = ({ isHideTitle }) => {
	return (
		<section className={cl.wrapper}>
			{!isHideTitle && (
				<Link to='/contacts' className={cl.title}>
					<h1 className='href'>Контактная информация</h1>
				</Link>
			)}

			<article className={cl.listsWrapper}>
				<ul className={cl.leftList}>
					<li>
						<div>
							<PointerIcon />
							<p>Адрес</p>
						</div>
						<p>​ул Ленина, Камышин, Россия</p>
					</li>
					<li>
						<div>
							<Phone2Icon />
							<p>Телефон</p>
						</div>
						<p>+7 (995) 9854857</p>
					</li>
					<li>
						<div>
							<Mail2Icon />
							<p>E-mail</p>
						</div>
						<p className={cl.blue}>matrix@site.ru</p>
					</li>
					<li>
						<div>
							<TelegramIcon />
							<p>Telegram</p>
						</div>
						<div>
							<p className={`${cl.blue} ${cl.space}`}>8 905 967-45-53</p>
							<p className={cl.gray}>помощник</p>
						</div>
					</li>
				</ul>

				<ul className={cl.rightList}>
					<li>
						<div>
							<ClockIcon />
							<p>Часы работы</p>
						</div>

						<p>c 9:00 до 18:00</p>
					</li>
					<li>
						<div>
							<WhatsappIcon />
							<p>WhatsApp</p>
						</div>

						<div>
							<p className={`${cl.blue} ${cl.space}`}>8 995 985-48-57</p>
							<p className={cl.gray}>менеджер</p>
						</div>
					</li>
				</ul>
			</article>
		</section>
	)
}

export default ContactInfo
