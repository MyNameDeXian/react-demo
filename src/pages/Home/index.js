import React, { Component } from 'react'
import Container from 'Container'
import Footer from 'components/Footer'
import InputRow from 'components/InputRow'

import './home.scss'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return(
			<Container>
				<div className="home content">
					content
				</div>
				<InputRow />
				<Footer/>
			</Container>
		)
	}
}

export default Home;