const arr = [2, NaN, 0, 0, 0, 1, 1, null, 1, undefined, 'string'];
function searchTypeArr(array) {
  let evenNumbered = 0;
  let odd = 0;
  let nol = 0;
  let notnumber =0;
  for (let index = 0; index < arr.length; index++) {
    const element = array[index]
    if (isNaN(element) || typeof(element) !== "number") {
      notnumber++
    } else if (element === 0) {
      nol++
    } else if (element % 2 === 0) {
      evenNumbered++
    } else {
      odd++
    }
  };
  console.log(`чётных: ${evenNumbered}`);
  console.log(`нечётных: ${odd}`);
  console.log(`нулей: ${nol}`);
  console.log(`не числa: ${notnumber}`);
}
searchTypeArr(arr)