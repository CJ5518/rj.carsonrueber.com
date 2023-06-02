

//Refresh the text content of the page
function refresh() {
	let moneyOwed = getMoneyOwedInterest(new Date());
	let roundedMoney = round(moneyOwed);
	text.textContent = "You owe me: " + commaIfy(moneyOwed.toString())
	text2.textContent = "Or: $" + commaIfy(roundedMoney.toString())
	text3.textContent = "Total money gained from this loan: $" + commaIfy(round(roundedMoney - 100).toString());
}



refresh();
