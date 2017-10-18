// 开发者：2017-10-17 李德贤  QQ:517334881
//-------------------------------------------------------
// 循环渲染日历到页面 的方法
export function makeCalendar(dates, calendarItem){
	let { firstDay, lastDay } = dates;
	let result = [];
	for( let i=0; i < firstDay + lastDay; i++ ) {
		let date = i - firstDay + 1
		if( i< firstDay || date > lastDay) {
			date = '';
		}
		result[i] = calendarItem(date, i);
	}
	return result;
}
// 循环渲染星期日 - 星期六
export function makeWeeks( weekItem ){
	let weeks = ["日", "一", "二", "三", "四", "五", "六"];
	for(let i=0; i<7; i++){
		weeks[i] = weekItem( weeks[i] );
	}
	return weeks;
}
// 获取当前 年、月、日 和当前月有多少天,第一天是星期几
export function getNewDate(){
	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	let lastDay = calcLastDay(year, month);
	let firstDay = calcFirstDay(year, month);
	return setTwoNum({ year, month, day, firstDay, lastDay});
}
// 根据选择的年日月，计算当月有多少天,计算第一天是星期几
export function calcDate( year, month, day ){
	let lastDay = calcLastDay(year, month);
	let firstDay = calcFirstDay(year, month);
	return setTwoNum({ year, month, day, firstDay, lastDay});
}
// 计算前一天 年 月 日; 参数为 当前显示天的 年 月 日 对象
export function calcBeforeDay( dates ){
	let { year, month, day, lastDay, firstDay } = dates;
	if( --day == 0 ){
		if( --month == 0 ){
			year--;
			month = 12;
		}
		day = calcLastDay(year, month);
		lastDay = calcLastDay(year, month);
		firstDay = calcFirstDay(year, month);
	}
	return setTwoNum({ year, month, day, firstDay, lastDay});
}
// 计算后一天 年 月 日; 参数为 当前显示天的 年 月 日
export function calcNextDay( dates ){
	let { year, month, day, lastDay, firstDay } = dates;
	if( ++day > lastDay ){
		if( ++month > 12 ){
			year++;
			month = 1;
		}
		day = 1;
		lastDay = calcLastDay(year, month);
		firstDay = calcFirstDay(year, month);
	}
	return setTwoNum({ year, month, day, firstDay, lastDay});
}
// 根据传过来的年月，计算该月有多少天
export function calcLastDay(year, month){
	let days = new Date(year, --month, 31).getDate();
	return days - 31 === 0 ? 31 : 31 - days;
}
// 计算第一天是星期几
export function calcFirstDay(year, month){
	return new Date(year, --month, 1).getDay()
}
// 把小于 10 月、日数，转为 2 位字符串
export function setTwoNum( dates ){
	if( String(dates.month).length < 2 ){
		dates.month = '0' + dates.month;
	}
	if( String(dates.day).length < 2 ){
		dates.day = '0' + dates.day;
	}
	return { ...dates };
}



