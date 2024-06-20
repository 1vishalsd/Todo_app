const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Vishal:Vishal123@cluster0.efvbc6w.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: booleand,
});

const todo = mongoose.model("todo", todoSchema);

module.export = {
  todo,
};
