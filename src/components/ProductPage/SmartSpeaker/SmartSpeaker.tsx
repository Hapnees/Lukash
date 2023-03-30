import cl from './SmartSpeaker.module.scss'

const SmartSpeaker = () => {
	return (
		<div className={cl.wrapper}>
			<p>
				В этом разделе вы можете описать товар, выделив для потенциального
				клиента его особенности:
			</p>

			<ul>
				<li>функциональность;</li>
				<li>технические характеристики;</li>
				<li>конкурентные преимущества</li>
			</ul>

			<p>
				При необходимости, вы можете указать в настройках возможность заказа
				товара со страницы
			</p>
		</div>
	)
}

export default SmartSpeaker
