const express = require("express");
const PORT = 4000;

const app = express();

app.use(express.json());

require("./routes/todos")(app);

app.listen(PORT, () => {
  console.log("thanks server is running on port: " + PORT);
});
