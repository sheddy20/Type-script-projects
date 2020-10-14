interface Mytodo {
  title: string;
  message: string;
}

function fetchTodos(mytodos: any) {
  console.log(`${mytodos.title}, ${mytodos.message}`);
}

let getTodos = { title: 'Take the trash out', message: 'finally' }

fetchTodos(getTodos);