import React, { Component } from 'react'
import './image.scss'
import imgs from './imgs/test.png'

class ImageRows extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() {
		return(
			<div className="image-rows flex-row-c-sa" style={{windth: clientWidth}}>
				<img src={imgs} alt=""/>
				<img src={imgs} alt=""/>
				<img src={imgs} alt=""/>
				<img src={imgs} alt=""/>
				<img src={imgs} alt=""/>
			</div>
		)
	}	
}

export default ImageRows;