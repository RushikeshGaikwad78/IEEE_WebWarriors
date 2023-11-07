const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
const getToDo = require('./controllers/ToDocontroller')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())

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