const {
  getTodos,
  updateTodo,
  deleteTodo,
  createTodo,
} = require("../controllers/todos");
const { checkUser, validateUser } = require("../middlewares/users");

function todosRoutes(app) {
  app.use("/api/todos/", checkUser, validateUser);

  app.get("/api/todos", getTodos);

  app.post("/api/todos", createTodo);

  app.delete("/api/todos/:todoId", deleteTodo);

  app.put("/api/todos/:todoId", updateTodo);
}

module.exports = todosRoutes;
