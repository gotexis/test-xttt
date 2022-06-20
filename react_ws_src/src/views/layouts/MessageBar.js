import React, {useState, useEffect, useRef} from 'react'
import jquery from 'jquery'

export default function MessageBar () {

	const [msgs, setMsgs] = useState([])
	const msgBar = useRef(null)

	const show_message = (h, m) => {
		msgs.push({h:unescape(h), m:unescape(m)})
		setMsgs(msgs)
		jquery(msgBar.current).slideDown()
	};

	// function closeWindow () {
	// 	this.state.msgs = []
	// 	jquery(this.refs.msg_bar).slideUp()
	// }
	//
	// function test_message () {
	// 	app.trigger(app.events.show_message, 'header', 'this is message')
	// }

	useEffect(() => {
		app.on(app.events.show_message, show_message)
	}, [])

		return (
			msgs.length > 0 &&
			<div id='msg_bar' ref={msgBar}>
				<div className='container'>
					<div>
						{
							msgs.map(function (m, i) {
								return (
									<p className='one_line' key={i}><span className='exclaim'>{ m.h.length>1 ? m.h+' : ' : '' }</span>{ m.m }<br/></p>
								)
							})
						}
						<a className='close fa fa-close' onClick={this.closeWindow.bind(this)}></a>
					</div>
				</div>
			</div>
		)
}
