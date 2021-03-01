import mongoose from "mongoose";

const listSchema = mongoose.Schema(
  {
    listName: { type: String, required: true },
    items: [],
    star: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
const List = mongoose.model("List", listSchema);

export default List;
