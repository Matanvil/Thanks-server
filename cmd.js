const { getTodos, setTodos } = require('./services/todos');

function displayTodos() {
    console.group('my todos')
    getTodos()
        .map(({ id, text }) => console.log(`\t${id}) ${text}`))
    console.groupEnd('my todos')
}

function addTodo(text) {
    const newTodo = { id: Date.now().toString(), text };
    setTodos([
        newTodo,
        ...getTodos()
    ]);
    console.log('your task has been added');
    console.table(newTodo);
}

function deleteTodo(todoId) {
    setTodos(getTodos().filter(todo => todo.id !== todoId));
    console.log('your task has been deleted');
}

function updateTodo([todoId, ...text]) {
    const todos = getTodos();
    const editedTodo = todos.find(todo => todo.id === todoId);
    editedTodo.text = text.join(' ');
    setTodos(todos);
    console.log('your task has been updated');
    console.table(editedTodo);
}

module.exports = {
    displayTodos,
    addTodo,
    deleteTodo,
    updateTodo
}