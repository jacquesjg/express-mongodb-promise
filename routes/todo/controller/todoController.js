const Todo = require("../model/Todo");

function getAllTodo(body) {
    return new Promise((resolve, reject) => {
        Todo.find(body)
            .then((payload) => {
                resolve(payload);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

function createTodo(body) {
    return new Promise((resolve, reject) => {
        const newTodo = new Todo({
            todo: body.to,
            isDone: body.isDone,
        })

        newTodo
            .save()
            .then((payload) => {
                resolve(payload);
            })
            .catch((error) => {
                reject(error);
            })
    });
}

module.exports = {
    getAllTodo,
    createTodo
};