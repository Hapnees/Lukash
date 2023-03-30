import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import cl from './StrokeInput.module.scss'

interface IProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	error?: FieldError
}

const StrokeInput = forwardRef<HTMLInputElement, IProps>(
	({ error, ...props }, ref) => {
		const inputClassName = error?.message
			? `${cl.input} ${cl.inputError}`
			: cl.input

		return (
			<div className={cl.wrapper}>
				<input type='text' className={inputClassName} {...props} ref={ref} />
				{error?.message && <p className={cl.error}>{error.message}</p>}
			</div>
		)
	}
)

export default StrokeInput
