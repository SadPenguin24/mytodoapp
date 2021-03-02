import asyncHandler from "express-async-handler";
import List from "../models/listModels.js";

//@desc fetch all products
//@route Get /lists
const getLists = asyncHandler(async (req, res) => {
  res.json(await List.find().sort({ star: -1 }));
});

//@desc fetch by ID
//@route Get /lists/:id
const getListById = asyncHandler(async (req, res) => {
  const list = await List.findById(req.params.id);
  if (list) {
    res.json(list);
  } else {
    res.status(404);
    throw new Error("List not found!");
  }
});

//@desc add a list
//@route post /lists/add
const addList = asyncHandler(async (req, res) => {
  const listName = req.body.listName;

  await List.find()
    .then((list) => {
      const newList = new List({
        listName,
        items: [],
      });

      newList
        .save()
        .then(() => res.json("list added"))
        .catch((err) => res.status(400).json("error" + err));
    })
    .catch((err) => res.status(400).json("error" + err));
});

//@desc delete a list
//@route delete /lists/delete
const deleteList = asyncHandler(async (req, res) => {
  await List.findByIdAndDelete(req.params.id)
    .then(() => res.json("list deleted"))
    .catch((err) => res.status(400).json("error" + err));
});

//@desc star a list
//@route post /lists/:id/star
const starList = asyncHandler(async (req, res) => {
  await List.findById(req.params.id).then((list) => {
    list.star = true;
    list
      .save()
      .then(() => res.json(req.params.id + " starred"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

//@desc unstar a list
//@route post /lists/:id/unstar
const unStarList = asyncHandler(async (req, res) => {
  await List.findById(req.params.id).then((list) => {
    list.star = false;
    list
      .save()
      .then(() => res.json(req.params.id + " unstarred"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

export { getLists, getListById, addList, deleteList, starList, unStarList };
