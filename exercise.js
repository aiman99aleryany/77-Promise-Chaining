// Write a first promise that takes as parameter the variable isLogged .
// If the variable is true, then we return a random number from the resolve, otherwise we dispatch an error.
// We write a second promise that takes a variable of type number as a parameter. If the input parameter is
// greater than 0.5, in the resolve we must return the following data: {name: "John", age: 24}, otherwise we
// must dispatch an error. Once this is done, try to chain the promises to eventually return the final object {name: "John", age: 24}

const isLogged = true;

const validateLogging = (isLogged) =>
  new Promise((resolve, reject) => {
    if (isLogged) resolve(Math.random());
    else reject(new Error("User is not logged in"));
  });

const checkIfGreater = (number) =>
  new Promise((resolve, reject) => {
    if (typeof number !== "number")
      reject(new Error(`${number} is not a number`));
    else if (number > 0.5) resolve({ name: "John", age: 24 });
    else reject(new Error(`${number} is less than 0.5`));
  });

const getUserInfo = (validatation, greatness, isLogged) => {
  validatation(isLogged)
    .then((n) => checkIfGreater(n))
    .then((userInfo) => console.log(userInfo))
    .catch((err) => console.log(err));
};

getUserInfo(validateLogging, checkIfGreater, isLogged);
