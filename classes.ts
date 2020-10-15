// interface Mytodo {
//   title: string;
//   message: string;
// }

// function fetchTodos(mytodos: any) {
//   console.log(`${mytodos.title}, ${mytodos.message}`);
// }

// let getTodos = { title: 'Take the trash out', message: 'finally' }

// fetchTodos(getTodos);

let getFullName = function (firstName: string, lastName?:string): any{
  
  if (lastName == undefined) {
    return firstName; 
  }
  return (`my firstName is: ${firstName}, my lastName is: ${lastName}`);
}

const getNames = getFullName('Shedrack',);
console.log(getNames);