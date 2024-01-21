function check(number) {
	if (number >= 1000) {
	  return console.log("данные неверны");
	} else if (number === 0 || number === 1 || number === -1) {
	  return console.log("число равно 0/-1/1");
	} else if (number === 2 || number === 3) {
	  return console.log("число простое");
	} else if (number % 2 === 0 || number % 3 === 0) {
	  return console.log("число не простое");
	} else {
	  return console.log("число простое");
	}
 }
check()