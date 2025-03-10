//Contains shared code between this website and an appsScript

//String MUST contain a . for it to be added some commas
function commaIfy(str) {
	let periodPosition = str.search(/\./);
	console.log(periodPosition);
	while (true) {
		if (periodPosition >= 4) {
			periodPosition -= 3;
			str = str.slice(0, periodPosition) + "," + str.slice(periodPosition);
		}
		else {break;}
	}
	return str;
}

//Round a number to 2 decimal places because that's how money operates
function round(n){
	return Math.floor((n * 100) + .5) / 100
};

//Returns the money RJ owes me (the interest one)
function getMoneyOwedInterest(date) {
	let startTime = new Date("June 20, 2020 13:35:00");

	let diffTime = date.getTime() - startTime.getTime();

	//Number of weeks since the start time
	let periods = ((((diffTime / 1000) / 60) / 60) / 24) / 7;

	let princ = 110.02663454759562 - 55.01; //principle
	let r = .1; //Interest rate
	let n = 7; //number of times interest applied per time period
	let t = periods; //periods

	
	let moneyOwed = princ * Math.pow((1 + (r/n)), n * t);
	return moneyOwed;
}
