import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import CartCheckout from './pages/CartCheckout/CartCheckout'
import CartPage from './pages/CartPage/CartPage'
import CatalogPage from './pages/CatalogPage/CatalogPage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import HomePage from './pages/HomePage/HomePage'
import NewsPage from './pages/NewsPage/NewsPage'
import ProductPage from './pages/ProductPage/ProductPage'
import ServicesPage from './pages/ServicesPage/ServicesPage'
import SpecificNewsPage from './pages/SpecificNewsPage/SpecificNewsPage'
import SpecificServicePage from './pages/SpecificServicePage/SpecificServicePage'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<HomePage />} />
				<Route path='/catalog' element={<CatalogPage />} />
				<Route path='/catalog/:category' element={<CategoryPage />} />
				<Route path='/catalog/:category/:id' element={<ProductPage />} />
				<Route path='/services' element={<ServicesPage />} />
				<Route path='/services/:id' element={<SpecificServicePage />} />
				<Route path='/news' element={<NewsPage />} />
				<Route path='/news/:id' element={<SpecificNewsPage />} />
				<Route path='/contacts' element={<ContactsPage />} />
				<Route path='/cart' element={<CartPage />} />
				<Route path='/cart/checkout' element={<CartCheckout />} />
			</Route>
		</Routes>
	)
}

export default App
