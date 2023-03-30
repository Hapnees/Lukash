import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import cl from './Button.module.scss'

const Button: FC<
	DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ className, children, ...props }) => {
	return (
		<button className={`${cl.button} ${className}`} {...props}>
			{children}
		</button>
	)
}

export default Button
