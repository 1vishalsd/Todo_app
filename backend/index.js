const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
app.use(express.json());

app.post("/todo", async function (req, res) {
  const createPaylaod = req.body;
  const parsePayload = createTodo.safeParse(createPaylaod);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You send wrong input",
    });
    return;
  }
  await todo.create({
    title: createPaylaod.title,
    description: createPaylaod.description,
    completed: false,
  });
  res.json({
    msg: "Todo is Created",
  });
});
app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  title: "go to gym";
  description: "you need go to gym";

  res.json({
    todos,
  });
});
app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You send the wrong input",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});
