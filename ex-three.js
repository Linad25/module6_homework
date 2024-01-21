function first(numberFir) {
	return function second(numberSec) {
	  return numberFir + numberSec
	}
 }
 let firstFunk = first(90);
 console.log(firstFunk(10));