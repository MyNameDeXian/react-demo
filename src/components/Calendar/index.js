import React, { Component } from 'react'
import * as calcDate from './calendarCalc.js'
import './calendar.scss'

class Calendar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weeks: ["日", "一", "二", "三", "四", "五", "六"],
		}
	}
	componentWillMount() {
		let dates = calcDate.getNewDate();
		this.setState({ dates });
		console.log(dates)
	}
	componentDidMount() {
		
	}
	render() {
		let { dates } = this.state;
		return (
			<div className="calendar">
				<header className="flex-row-c-sp">
					<div onClick={ this.beforeDay }>前一天</div>
					<div> { dates.year }-{ dates.month }-{ dates.day } </div>
					<div onClick={ this.nextDay }>后一天</div>
				</header>
				<div className="weeks flex-row">
					{ this.makeWeeks( this.state.weeks )}
				</div>
				<div className="calendar-items">
					{ this.makeDates( this.state.dates )}
				</div>
			</div>
		)
	}
	beforeDay = () =>{
		let dates = calcDate.calcBeforeDay( this.state.dates );
		this.setState({ dates });
		console.log(dates)
	}
	nextDay = () =>{
		let dates = calcDate.calcNextDay( this.state.dates );
		this.setState({ dates });
		console.log(dates)
	}
	setWeek = ( week ) =>{
		return <div key={week} className='flex-row-center flex-1'>{ week }</div>
	}
	makeWeeks = ( weeks ) =>{
		let result = [];
		for(let i=0; i<7; i++){
			result[i] = this.setWeek( weeks[i] );
		}
		return result;
	}
	setDates = ( date, key ) =>{
		let { dates } = this.state;
		let bg = dates.day == date ? 'on' : '';
		return (
			<div key={key} className={ "item flex-row-center " + bg }>
				{ date }
			</div>
		)
	}
	makeDates = ( dates ) =>{
		let { firstDay, lastDay } = dates;
		let result = [];
		for(let i=0; i < lastDay + firstDay; i++){
			let date = i - firstDay + 1;
			if( i < firstDay || date > lastDay ){
				date = '';
			}
			result[i] = this.setDates( date, i );
		}
		return result;
	}
}

export default Calendar;