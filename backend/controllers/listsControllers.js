import e from "express";
import asyncHandler from "express-async-handler";
import List from "../models/listModels.js";

//@desc fetch all products
//@route Get /lists
const getLists = asyncHandler(async (req, res) => {
  const lists = await List.find().sort({ star: -1 });
  res.json(lists);
});

//@desc fetch all products
//@route Get /lists
const getListById = asyncHandler(async (req, res) => {
  const list = await List.findById(req.params.id);
  if (list) {
    res.json(list);
  } else {
    res.status(404);
    throw new Error("List not found!");
  }
});

export { getLists, getListById };
