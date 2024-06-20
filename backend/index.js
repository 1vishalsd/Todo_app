const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
app.use(express.json());

app.post("/todo", function (req, res) {
  const createPaylaod = req.body;
  const parsePayload = createTodo.safeParse(createPaylaod);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You send wrong input",
    });
    return;
  }
});
app.get("/todos", function (req, res) {});
app.put("/completed", function (req, res) {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You send the wrong input",
    });
    return;
  }
});
