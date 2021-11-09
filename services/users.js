const { writeFile, readFile } = require('fs/promises');
 
const STORE_PATH = './users.json';

async function getUsers() {
    const data = await readFile(STORE_PATH)
    return JSON.parse(data.toString());
}
 
async function setUsers(users) {
    await writeFile(STORE_PATH, JSON.stringify(users));
}

module.exports = {
    getUsers,
    setUsers,
};