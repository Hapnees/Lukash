import ContactInfo from '@/components/ContactInfo/ContactInfo'
import SocialWebs from '@/components/SocialWebs/SocialWebs'
import NavLayout from '@/layouts/NavLayout/NavLayout'
import cl from './ContactsPage.module.scss'

const ContactsPage = () => {
	return (
		<NavLayout title='Контакты'>
			<article>
				<ContactInfo isHideTitle={true} />
				<SocialWebs backgroundColor='#fff' style={{ marginBottom: '100px' }} />
				<div>
					<h1 className='title'>Наши реквизиты</h1>
					<p className={cl.text}>
						<span>Наиманование компании</span> ООО "Компания"
					</p>
				</div>
			</article>
		</NavLayout>
	)
}

export default ContactsPage
