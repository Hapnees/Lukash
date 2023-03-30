import cl from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={cl.footer}>
			<ul className={cl.list}>
				<li>
					<h1>Покупателям</h1>
					<p>Способы оплаты</p>
					<p>Подарочные сертификаты</p>
					<p>Доставка</p>
					<p>Пункты выдачи</p>
				</li>
				<li>
					<h1>Бизнесу</h1>
					<p>Поставщикам</p>
					<p>Франшиза</p>
					<p>Тендеры</p>
				</li>
				<li>
					<h1>О компании</h1>
					<p>О нас</p>
					<p>Контакты</p>
					<p>Вакансии</p>
				</li>
				<li>
					<h1>Блог</h1>
					<p>Как создать интернет-магазин</p>
					<p>Как создать продающий лендинг</p>
					<p>Сайт vs Маркетплейс</p>
				</li>
			</ul>
		</footer>
	)
}

export default Footer
