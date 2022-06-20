import React from 'react'
import Header from './layouts/Header'
import Footer from './layouts/Footer'

export default function Main(props) {
	const {popup, children} = props
	return (
		<div style={fullHeight}>
			<Header/>
			<section id='main_content'>
				<div className='main_container'>
				{children}
				</div>
			</section>
			<Footer/>
			{popup}
		</div>
	)
}

const fullHeight = {
	height: '100%'
}
