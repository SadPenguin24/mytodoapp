import mongoose from "mongoose";

const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    itemName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Item = mongoose.model("Item", itemSchema);

export default Item;
