// Only changes code below this line
function myDoWhile() {
  var myNumbers = "";
  var i = 0;
  do {
    myNumbers += i;
    if (i < 9) {
      myNumbers += ", ";
    }
    i++;
  } while (i < 10);
  console.log(myNumbers);
  return myNumbers;
}
myDoWhile();
// Only changes code above this line
module.exports = myDoWhile;
