import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.scss'
import { toastContainerConfig } from './configs/toast.config'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<HashRouter basename={process.env.PUBLIC_URL}>
		<ToastContainer {...toastContainerConfig} />
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>
)
