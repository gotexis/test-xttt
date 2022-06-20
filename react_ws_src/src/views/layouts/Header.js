import React from 'react'
import {Link} from 'react-router'
// import jquery from 'jquery'
import MessageBar from '../layouts/MessageBar'

export default function Header() {

	return (
		<header id='main_header'>
			<div id='brand'>
				<div className='container'>

					<Link to={app.settings.ws_conf.header.head_l_logo.u} className='logo-tl'>
						<img src={require('../../../static/images/react_sha.png')}/>
					</Link>

					<Link to={app.settings.ws_conf.header.site_title.u} className='main-site-name'>
						{app.settings.ws_conf.header.site_title.txt}
					</Link>

					<nav>
						<ul>
							{
								app.settings.ws_conf.main_menu.pages.p.map(function (p, i) {
									return (
										<li key={i}>
											<Link to={p.u}>
												{p.name}
											</Link>
										</li>
									)
								})
							}
						</ul>
					</nav>

				</div>
			</div>

			<MessageBar/>

		</header>
	)
}

// property validation
Header.propTypes = {
	children: React.PropTypes.any
}

Header.contextTypes = {
	router: React.PropTypes.object.isRequired
}
