let myNames = function (first: string, last: string, age: number):string{
  
  return (`my first name is: ${first}, my last name is: ${last}, am ${age} years`);
}

const validateInfo = myNames('Tristan', 'Thompson', 35)
console.log(validateInfo);