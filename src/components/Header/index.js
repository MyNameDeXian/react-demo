import React, { Component } from 'react'

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return(
			<div className="header flex-row-center">
				<div className="back"></div>
				<div className="title">
					{ this.props.children }
				</div>
				<div className="rightMemu"></div>
			</div>
		)
	}
}

export default Header;