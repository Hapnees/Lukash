import NewsIcon from '@/icons/NewsIcon'
import { Link } from 'react-router-dom'
import cl from './News.module.scss'

const News = () => {
	return (
		<section className={cl.wrapper}>
			<article className={cl.topContent}>
				<div className={cl.titleWrapper}>
					<NewsIcon />
					<Link to='/news'>
						<h1 className='href'>Новости</h1>
					</Link>
				</div>
				<p className={cl.subtitle}>Новогодняя распродажа</p>
				<p className={cl.date}>19.12.2022</p>
				<div className={cl.info}>
					<p>Новогодняя распрадажа</p>
					<p>
						До конца года скидка 20% на все товары из раздела "Всё для офиса"
					</p>
				</div>
			</article>

			<article className={cl.bottomContent}>
				<h1 className={`title ${cl.title}`}>
					Заголовок текста для поисковых систем
				</h1>

				<p className={cl.bottomInfo}>
					Здесь можно написать более детальную информацию на актуальную тему,
					которая продвинет сайт по ключевым запросам ваших клиентов
				</p>
			</article>
		</section>
	)
}

export default News
