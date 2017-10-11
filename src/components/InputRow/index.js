import React, { Component } from 'react'

class InputRow extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount() {
		
	}
	onFocus(e){
		let input = e.target
		console.log(input.value)
		input.scrollIntoViewIfNeeded();
	}

	render(){
		return (
			<div className="input-row flex-row-c-sa">
				<p>标题</p>
				<input onFocus={this.onFocus} type="text"/>
			</div>
		)
	}
}

export default InputRow;