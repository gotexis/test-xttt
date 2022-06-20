import React from 'react'
import app from 'ampersand-app'
import {render} from 'react-dom'
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import './sass/main.scss'

import Main from './views/Main'

import Ttt from './views/ttt/Ttt'

import Txt_page from './views/pages/Txt_page'
import PopUp_page from './views/pages/PopUp_page'

import Contact from './views/pages/Contact'
import ErrorPage from './views/pages/ErrorPage'

import prep_env from './models/prep_env'


let renderSite = function () {
	return render((
		<BrowserRouter>
			<Main>
				<Routes>
					<Route path='/' element={<Txt_page/>} />

					{/* todo: below need to pass different prop to this component to render.
								Guess below page will only render homepage for now
					\.*/}
					<Route path='/pg/(:page)' element={<Txt_page/>}/>

					<Route path='/ttt' element={<Ttt/>} />
					<Route path='/pupg/(:pu_page)' element={<PopUp_page/>} />
					<Route path='/contact-us' element={<Contact/>} />
					<Route path='/error/404' element={<ErrorPage/>} />
				</Routes>
			</Main>
		</BrowserRouter>
	), document.getElementById('root'))
}

// ----------------------------------------------------------------------
// This section is used to configure the global app
// ----------------------------------------------------------------------

window.app = app

app.extend({

	settings: {
		is_mobile: false,
		mobile_type: null,
		can_app: false,

		ws_conf: null,

		curr_user: null,

		user_ready: false,
		user_types: [],
		basket_type: null,
		basket_total: 0,
	},


	init () {

		prep_env(this.start.bind(this))

	},

	start () {
		renderSite()
	},

	show_page (u) {
		switch(u) {
			case 'home':
				browserHistory.push('/')
				break

			default:
				console.log('show_page event with:', u) 
				browserHistory.push(u)
				break
		}
	},

	events: {
		show_message: 'show_message',
		show_page: 'show_page'
	},
})

app.init()

app.on(app.events.show_page, app.show_page)
