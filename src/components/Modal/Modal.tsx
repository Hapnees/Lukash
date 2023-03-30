import { FC, PropsWithChildren } from 'react'
import cl from './Modal.module.scss'

const Modal: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <section className={cl.wrapper}>{children}</section>
}

export default Modal
