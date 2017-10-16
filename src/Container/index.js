import React, { Component } from 'react'
import Header from 'components/Header'
import './container.scss'

class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			winHeight: document.documentElement.clientHeight,
		}
	}

	render() {
		let { winHeight } = this.state;
		console.log(this.props.children);
		return(
			<div className="container flex-col" style={{height: winHeight}}>
				<Header>
					{ this.props.title }
				</Header>
				{ this.props.children }
			</div>
		)
	}
}

export default Container;