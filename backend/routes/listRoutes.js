import express from "express";
import { getLists, getListById } from "../controllers/listsControllers.js";

const router = express.Router();

router.route("/").get(getLists);

router.route("/:id").get(getListById);

export default router;
