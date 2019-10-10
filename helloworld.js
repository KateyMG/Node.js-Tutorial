//console.log("Hello World");
// function say(word) {
//     console.log(word);
//   }
  
//   function execute(someFunction, value) {
//     someFunction(value);
//   }
  
// //say("Hello world")
// execute(say, "Hello");

    // This is a first glimpse at what I like to call "advanced" JavaScript, but let's take it step by step. 
    // For now, let's just accept that in JavaScript, we can pass a function as a parameter when calling another function. 
    // We can do this by assigning our function to a variable, which we then pass, or by defining the function to pass in-place.

function execute(someFunction, value) {
    someFunction(value);
  }
  
  execute(function(word){ console.log(word) }, "Hello");