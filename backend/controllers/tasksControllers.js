import asyncHandler from "express-async-handler";
import List from "../models/listModels.js";
import Item from "../models/taskModels.js";

//@desc fetch all tasks
//@route Get /lists/:id/tasks
const getTasks = asyncHandler(async (req, res) => {
  const list = await List.findById(req.params.id);

  if (list) {
    res.json(list.items);
  } else {
    res.status(404);
    throw new Error("List not found!");
  }
});

//@desc add a task
//@route post /lists/:id/tasks/add
const addTask = asyncHandler(async (req, res) => {
  const itemName = req.body.itemName;

  await List.findById(req.params.id)
    .then((list) => {
      const newItem = new Item({
        itemName,
      });

      list.items.push(newItem);
      list.save();
      console.log("item added!");
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

export { getTasks, addTask };
