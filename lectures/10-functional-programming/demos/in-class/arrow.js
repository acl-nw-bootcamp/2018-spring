function prehistoricIncrement (value) {
  return value++;
}

const normalIncrement = function(value) {
  return value++;
}

const arrowIncrement = value => value++;


const normalLogger = function() {console.log("Hello World.");}

const arrowLogger = () => console.log("Hello Arrow.");


const normalAdder = function(first, second) {return first + second;}

const arrowAdder = (first, second) => first + second;


const complexArrow = () => {
  // lots of logic and code goes here
  return something || nothing;
}
