import React, { Component } from 'react'
import './bigImages.scss'
import imgs from './imgs/test.png'

class BigImages extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return(
			<div >
				<div>
					<img src={imgs} alt=""/>
				</div>
			</div>
		)
	}
}