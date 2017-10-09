import React, { Component } from 'react'
import Header from 'components/Header'

class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			winHeight: window.innerHeight,
		}
	}
	render() {
		let { winHeight } = this.state;
		return(
			<div className="container" style={{height: winHeight}}>
				<Header />
				{ this.props.children }
			</div>
		)
	}
}

export default Container;