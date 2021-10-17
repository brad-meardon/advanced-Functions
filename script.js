const first = () => {
   const greet = 'Hi';
   const second = () =>{
      alert(greet); // Always remembers parent variables in the parent scope so can fetch greet - Browser remembers greet.
   }
   return second;
}

const newFunc = first();
newFunc();

// Closures - A function ran, the function executed, it's never going to execute again. BUT will remember the references to the variables.
// Child Scope will always have access to the Parent Scope. But Parent Scopes can't access the Children Scopes.

// Currying
const addition = (x, y) => x + y;
const curriedAddition = (x) => (y) => x + y;
curriedAddition(3); // Returns the Y function
curriedAddition(3)(4); // Returns x + y function resulting in 7
const addBy3 = curriedAddition(3); // Function that always adds 3 to the number supplied in the brackets

// Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5); // Runs the Sum function in spot G with 5 making 6. Then runs the Sum function in spot F with 6 making and returning 7.