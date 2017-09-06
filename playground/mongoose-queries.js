const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59b0679db62e6254cd952ced';
//
// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

var userID = '5966b72a2293be244b23a016';
User.findById(userID).then((user) => {
    if (!user) {
        // throw new Error(`User with id ${userID} not found!`);
        return console.log(`User with id ${userID} not found!`);
    }
    console.log(JSON.stringify(user, null, 2));
}).catch((e) => console.log(e));



