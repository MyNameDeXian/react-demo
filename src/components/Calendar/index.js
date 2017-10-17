import React, { Component } from 'react'
import * as calcDate from './calendarCalc.js'
import './calendar.scss'

class Calendar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
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
					{ calcDate.makeWeeks( this.weekItem )}
				</div>
				<div className="calendar-items">
					{ calcDate.makeCalendar( dates, this.calendarItem )}
				</div>
			</div>
		)
	}
	onCalendarItem = ( day ) => {
		let { dates } = this.state;
		dates.day = day;
		let str = `${dates.year}-${dates.month}-${day}`;
		this.setState({ dates });
		console.log(str);
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
	weekItem = ( week ) =>{
		return <div key={week} className='flex-row-center flex-1'>{ week }</div>
	}
	
	calendarItem = ( date, key ) =>{
		let { dates } = this.state;
		let bg = dates.day == date ? 'on' : '';
		return (
			<div onClick={ this.onCalendarItem.bind(this, date) } key={key} className={ "item flex-row-center " + bg }>
				{ date }
			</div>
		)
	}
}

export default Calendar;