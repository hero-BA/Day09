// Only change code below this line
function myForLoop1() {
    var evenNumbers = "";
    for (var i = 0; i < 10; i += 2) {
        evenNumbers += i;
        if(i < 8) {
            evenNumbers += ", ";
        }
   }   
   console.log(evenNumbers);
   return evenNumbers;
}
myForLoop1();

function myForLoop2() {
    var evenInverseNumbers = "";
    for (var i = 8; i >= 0; i -= 2) {
            evenInverseNumbers += i;
        if(i > 0) {
            evenInverseNumbers += ", ";
        }
    }
    console.log(evenInverseNumbers);
    return evenInverseNumbers;
}
myForLoop2();
// Only change code above this line
module.exports = {
    myForLoop1,
    myForLoop2
};