const http = require("http");

const onRequest = (req, res) => {
  res.end("Thanks my server is running");
};

const server = http.createServer(onRequest);
const PORT = 3000;
server.listen(PORT, () => {
  console.log("Thanks-Server is running on port: " + PORT);
});
