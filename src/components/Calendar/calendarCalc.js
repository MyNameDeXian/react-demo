// 获取当前 年、月、日 和当前月有多少天。
export function getNewDate(){
	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	let lastDay = calcLastDay(year, manth);
	return setTwoNum({ year, month, day, lastDay});
}
// 根据选择的年日月，计算当月有多少天。
export function calcDate( year, month, day ){
	let lastDay = calcLastDay(year, manth);
	return setTwoNum({ year, month, day, lastDay});
}
// 计算前一天 年 月 日; 参数为 当前天的 年 月 日 对象
export function calcBeforeDay( dates ){
	dates.day-- ;
	if( dates.day === 0 ){
		dates.month--;
		if( month === 0 ){
			dates.year--;
			dates.month = 12;
			dates.day = 31;
			dates.lastDay = 31;
		}
	}
	return setTwoNum( dates );
}
// 计算后一天 年 月 日; 参数为 当前天的 年 月 日
export function calcNextDay( dates ){
	dates.day++ ;
	if( dates.day > dates.lastDay ){
		dates.month++;
		if( month === 13 ){
			dates.year++;
			dates.month = 1;
			dates.day = 1;
			dates.lastDay = 31;
		}
	}
	return setTwoNum( dates );
}
// 计算当前月 有多少天
export function calcLastDay(year, month){
	let lastDay = 30;
	if( month == 2 ) {
		lastDay = new Date(year, month, 29) === 29 ? 28 ;
	} else {
		lastDay = new Date(year, month, 31) === 31 ? 30 ;
	}
	return lastDay;
}
// 把小于 10 月、日数，转为 2 位字符串
export function setTwoNum( dates ){
	if( dates.month < 10 ){
		dates.month = '0' + dates.month;
	}
	if( dates.day < 10 ){
		dates.day = '0' + dates.day;
	}
	return dates;
}



