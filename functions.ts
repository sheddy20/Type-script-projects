let myNames = function (first: string, last: string, age: number):string{
  
  return (`my first name is: ${first}, my last name is: ${last}, am ${age} years`);
}

const validateInfo = myNames('Tristan', 'Thompson', 35)
// console.log(validateInfo);

let getDetails = function (name: string, location?: string): string{
  if (location == undefined) {
    return name;
  }
  return `company name: ${name}, location: ${location}`
}

const myAnswer = getDetails('Google',);
// console.log(myAnswer);

let getItems = function (stuff1: string, stuff2?: string, price?: number): any{
  if (stuff2 == undefined) {
    return stuff1;

  } else if (price == undefined) {
    return stuff1;

  } 
  return `buy: ${stuff1}, buy: ${stuff2}, the prices is: ${price} dollars`
}

const myItems = getItems('Milk',)
console.log(myItems);