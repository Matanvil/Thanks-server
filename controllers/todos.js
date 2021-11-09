const todosService = require("../services/todos");

async function getTodos(req, res) {
  const todos = await todosService.getTodos();
  const userTodos = todos.filter(todo => todo.id === req.userId)
  res.json(userTodos);
}

async function createTodo(req, res) {
  const todos = await todosService.getTodos();
  const newTodo = {
    ...req.body,
    completed: false,
    user: req.userId,
    id: Math.random().toFixed(3).toString(),
  };
  todos.push(newTodo);
  await todosService.setTodos(todos);
  res.json(newTodo);
}

async function updateTodo(req, res) {
  const todos = await todosService.getTodos();
  const todoId = req.userId;

  const filteredTodos = todos.filter((todo) => todo.id === todoId);

  const editedTodo = filteredTodos.find(({ id }) => id === todoId);

  Object.assign(editedTodo, req.body);
  await todosService.setTodos(todos);
  res.json(editedTodo);
}

async function deleteTodo(req, res) {
  const todos = await todosService.getTodos();
  console.log(req.params.todoId, todos);
  await todosService.setTodos(
    todos.filter(({ id }) => id !== req.params.todoId)
  );
  res.json({ id: req.params.todoId });
}

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
