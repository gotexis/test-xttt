import React from 'react'
import {Link} from 'react-router-dom'

import X2JS from 'x2js'

export default function Txt_page(props) {
	// todo: hard to refactor here
	const page = 'home'
	const page_x = app.settings.ws_conf.pgs[page]

	if (!page || !page_x) return null

	return (
		<section id='Txt_page'>
			<div id='page-container'>
				<h1>{page_x.pg_name}</h1>

				<div dangerouslySetInnerHTML={{__html: page_x.txt.__cdata}}/>

				<div className='btns'>
					{
						(new X2JS()).asArray(page_x.btns.b).map(function (b, i) {
							console.log(b)
							return (
								<Link to={b.u} key={i}>
									<button type='submit' className='button'>
										<span>{b.txt} <span className='fa fa-caret-right'></span></span>
									</button>
								</Link>
							)
						})
					}
				</div>
			</div>
		</section>
	)
}
