import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'
import cl from './AmountInput.module.scss'

const AmountInput: FC<
	DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ ...props }) => {
	return <input type='text' {...props} className={cl.input} />
}

export default AmountInput
