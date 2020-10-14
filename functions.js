var myNames = function (first, last, age) {
    return ("my first name is: " + first + ", my last name is: " + last + ", am " + age + " years");
};
var validateInfo = myNames('Tristan', 'Thompson', 35);
// console.log(validateInfo);
var getDetails = function (name, location) {
    if (location == undefined) {
        return name;
    }
    return "company name: " + name + ", location: " + location;
};
var myAnswer = getDetails('Google');
// console.log(myAnswer);
var getItems = function (stuff1, stuff2, price) {
    if (stuff2 == undefined) {
        return stuff1;
    }
    else if (price == undefined) {
        return stuff1;
    }
    return "buy: " + stuff1 + ", buy: " + stuff2 + ", the prices is: " + price + " dollars";
};
var myItems = getItems('Milk');
console.log(myItems);
var cast;
cast = [
    'Tyler Hoeclin',
    'Jake Tapper',
    'Errica Durance',
    'Laura vandevoot',
];
console.log(cast);
var tuples;
tuples = ['helo', 56, true];
console.log(tuples);
