//File for dealing with appsScript, returns as json the monies rj owes me

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

//Refresh the text content of the page
function refresh() {
  let text = document.getElementById("text");
  let text2 = document.getElementById("text2");
  let text3 = document.getElementById("text3");
  
	let moneyOwed = getMoneyOwedInterest(new Date());
	let roundedMoney = round(moneyOwed);
	text.textContent = "You owe me: " + commaIfy(moneyOwed.toString())
	text2.textContent = "Or: $" + commaIfy(roundedMoney.toString())
	text3.textContent = "Total money gained from this loan: $" + commaIfy(round(roundedMoney - 100).toString());
}
