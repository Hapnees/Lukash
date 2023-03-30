import Footer from '@/components/Footer/Footer'
import { Outlet } from 'react-router'
import Header from '../../components/Header/Header'

const MainLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default MainLayout
