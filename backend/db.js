const mongoose = require("mongoose");
const { string } = require("zod");

// ------>>    mongodb+srv://Vishal:Vishal123@cluster0.efvbc6w.mongodb.net/

mongoose.connect(
  " mongodb+srv://Vishal:Vishal123@cluster0.efvbc6w.mongodb.net/todos"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = {
  todo,
};
