import express from "express";
import {
  getLists,
  getListById,
  addList,
  deleteList,
  starList,
  unStarList,
} from "../controllers/listsControllers.js";
import { getTasks, addTask } from "../controllers/tasksControllers.js";

const router = express.Router();

router.route("/").get(getLists);

router.route("/add").post(addList);

router.route("/:id").get(getListById);

router.route("/:id/star").put(starList);

router.route("/:id/unstar").put(unStarList);

router.route("/:id/delete").delete(deleteList);

router.route("/:id/tasks").get(getTasks);

router.route("/:id/tasks/add").post(addTask);

export default router;
