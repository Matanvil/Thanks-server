const { writeFile, readFile } = require('fs/promises');
 
const STORE_PATH = './todos.json';

async function getTodos() {
    const data = await readFile(STORE_PATH)
    return JSON.parse(data.toString());
}
 
async function setTodos(todos) {
    await writeFile(STORE_PATH, JSON.stringify(todos));
}

module.exports = {
    getTodos,
    setTodos,
};