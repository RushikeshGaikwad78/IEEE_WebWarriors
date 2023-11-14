const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
const getToDo = require('./controllers/ToDocontroller');
const bcrypt = require('bcrypt');
const { ToDoCollection, UserCollection } = require('./model/ToDomodel');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())

// const authDb = mongoose.createConnection(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define the schema and model for the new database
// const authSchema = new mongoose.Schema({
//   fullname: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     unique: true,
//     required: true,
//     validate: {
//       validator: function (v) {
//         // Basic email format validation
//         return /\S+@\S+\.\S+/.test(v);
//       },
//       message: 'Invalid email address',
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   confirmPassword: {
//     type: String,
//     required: true,
//   },
// });

// // Implement a pre-save hook to check and compare the password and confirmPassword fields
// authSchema.pre('save', function (next) {
//   if (this.isModified('password') || this.isNew) {
//     if (this.password !== this.confirmPassword) {
//       return next(new Error('Passwords do not match.'));
//     }

//     // Hash the password before saving it
//     bcrypt.hash(this.password, 10, (err, hash) => {
//       if (err) {
//         return next(err);
//       }
//       this.password = hash;
//       this.confirmPassword = undefined; // Clear confirmPassword after hashing
//       next();
//     });
//   } else {
//     return next();
//   }
// });

// // Create the model for the new database
// const AuthModel = authDb.model('Auth', authSchema);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to MongoDB...`))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  priority: String
});

module.exports = mongoose.model('Todo', todoSchema);




app.get('/', getToDo);
app.post('/save',getToDo.saveToDo)
app.post('/delete',getToDo.DeleteToDo)
app.post('/update',getToDo.updateToDo)
app.post('/login', getToDo.loginpage)
app.post('/signup', getToDo.signup)









// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// Define the User schema


// Create the User model
// const User = mongoose.model('User', userSchema);

// module.exports = User;
