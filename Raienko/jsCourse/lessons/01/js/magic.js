function promptChecker() {
  var i=0;
  var mark;
  for (; i<5;i++) {
    mark = prompt('Enter mark');
    if (mark < 60) {
      break;
    } else {
      console.log("Passed");
    }
  }
}

function promptCalculator() {
// to do
}
