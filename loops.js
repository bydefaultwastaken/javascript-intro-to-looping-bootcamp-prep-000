function forLoop(myArray) {
for (var i = 0; i < 25; i++) {
  myArray.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
}
  return myArray
}

function whileLoop(countdown) {
console.log(countdown);
while (countdown > 1) {
console.log(--countdown);
}
var countdown = "done"
return countdown
//return console.log(done)
}

function doWhileLoop(loopArray){
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    loopArray.pop()
  } while (loopArray.length > 0 && maybeTrue());
  return loopArray
}
