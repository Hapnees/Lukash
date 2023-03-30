import { DetailedHTMLProps, forwardRef, TextareaHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import cl from './StrokeTextarea.module.scss'

interface IProps
	extends DetailedHTMLProps<
		TextareaHTMLAttributes<HTMLTextAreaElement>,
		HTMLTextAreaElement
	> {
	error?: FieldError
}

const StrokeTextarea = forwardRef<HTMLTextAreaElement, IProps>(
	({ error, ...props }, ref) => {
		return (
			<div>
				<textarea className={cl.textarea} {...props} ref={ref} />
				{error?.message && <p>{error.message}</p>}
			</div>
		)
	}
)

export default StrokeTextarea
