function fetchTodos(mytodos) {
    console.log(mytodos.title + ", " + mytodos.message);
}
var getTodos = { title: 'Take the trash out', message: 'finally' };
fetchTodos(getTodos);
