

const incrCounter = () => {
    let count = 0;

  return () => {
    return ++count;
  }
}


incrCounter()();
incrCounter()();
alert(incrCounter()()); 


// const makeCounter = () => {
//     let count = 0;

//   return () => {
//     return ++count;
//   }
// }

// const counter = makeCounter();
// counter();
// counter();

// console.log(counter());