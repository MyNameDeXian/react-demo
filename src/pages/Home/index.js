import React, { Component } from 'react'
import Container from 'Container'
import Footer from 'components/Footer'
import InputRow from 'components/InputRow'
import ImagePicker from 'components/ImagePicker'
import Calendar from 'components/Calendar'

import './home.scss'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			files: []
		}
	}
	render() {
		let { files } = this.state;
		return(
			<Container title="Home">
				<div className="home flex-1">
					<Calendar />
					<ImagePicker
						files = { files }
						title = "上传凭证"
						onChange={ this.onChangeFile }
					></ImagePicker>
				</div>
				<InputRow />
				<Footer />
			</Container>
		)
	}
	onChangeFile = (files, type, key) =>{
		// console.log(files, type, key)
		if( type == 'remove') {
			this.setState({
				files
			})
		};
		// let timer = setTimeout(()=>{
		// 	console.log('上传失败');
		// 	files.pop();
		// 	this.setState({ files });
		// }, 1000)
	}
}

export default Home;