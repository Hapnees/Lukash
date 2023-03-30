import cl from './PopularCatProducts.module.scss'

const PopularCatProducts = () => {
	return (
		<section className={cl.wrapper}>
			<h1 className='title'>Популярные категории товаров</h1>

			<ul className={cl.poplarImgList}>
				<li>
					<img
						src='//i.siteapi.org/-7d0aPP0yqXqoqkt1tV5UjkZ7hM=/fit-in/313x939/filters:format(png):no_upscale(1)/s2.siteapi.org/e4576e079b8b459/cards/l4orps7szxcksksgs4socccscwkc8s'
						alt=''
					/>
					<h2>Всё для игр</h2>
					<p>С нашей техникой игры станут ещё лучше</p>
				</li>
				<li>
					<img
						src='//i.siteapi.org/0ypJqZDs9D6Q3JV5XTSJItWhDH0=/fit-in/313x939/filters:format(png):no_upscale(1)/s2.siteapi.org/e4576e079b8b459/cards/97smfukao0g844cgk0wck4scg0sw84'
						alt=''
					/>
					<h2>Всё для звука</h2>
					<p>Слушай музыку в своё удовольствие, а с техникой мы поможем</p>
				</li>
				<li>
					<img
						src='//i.siteapi.org/YdOL2P_EGkahIFc5CYikkJArvOY=/fit-in/313x939/filters:format(png):no_upscale(1)/s2.siteapi.org/e4576e079b8b459/cards/90lrzrmfjj8kgcsowowckw4s8gswow'
						alt=''
					/>
					<h2>Всё для офиса</h2>
					<p>С нашими товарами работа станет ещё приятней</p>
				</li>
			</ul>
		</section>
	)
}

export default PopularCatProducts
