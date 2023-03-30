import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import { newsData } from '@/data/news.data'
import NavLayout from '@/layouts/NavLayout/NavLayout'
import { useParams } from 'react-router'

const SpecificNewsPage = () => {
	const { id } = useParams<{ id: string }>()
	const oneNews = id ? newsData.find(el => el.id === +id) : undefined

	return (
		<NavLayout title={oneNews?.title} space='20px'>
			<BreadCrumbs
				mainTitle='Новости'
				mainHref='/news'
				title={oneNews?.title || ''}
			/>
			<p>{oneNews?.text}</p>
		</NavLayout>
	)
}

export default SpecificNewsPage
