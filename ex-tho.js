function outNumb(a, b) {
	const counter = setInterval(condition, 1000)
	function condition() {
	  if (a <= b) {
	  console.log(a)
	  a++
	  return counter
	  } else {
		 clearInterval(counter)
	  }
	}
 }
 
 outNumb(5, 15);