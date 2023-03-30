import NewsIcon from '@/icons/NewsIcon'
import NavLayout from '@/layouts/NavLayout/NavLayout'
import cl from './NewsPage.module.scss'
import { newsData } from '@/data/news.data'
import { Link } from 'react-router-dom'

const titleElelem = () => {
	return (
		<div className={cl.titleWrapper}>
			<NewsIcon />
			<h1 className={`title ${cl.title}`}>Новости</h1>
		</div>
	)
}

const NewsPage = () => {
	return (
		<NavLayout titleElement={titleElelem()}>
			<ul className={cl.info}>
				{newsData.map(news => (
					<li key={news.id}>
						<p className={cl.date}>{news.date}</p>
						<p>
							<Link to={`/news/${news.id}`}>{news.title}</Link>
						</p>
						<p>{news.title}</p>
						<p>{news.description}</p>
					</li>
				))}
			</ul>
		</NavLayout>
	)
}

export default NewsPage
