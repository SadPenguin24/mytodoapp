import React from "react";
import { Link } from "react-router-dom";

function ListName({ _id, taskName }) {
  return (
    <div>
      <h3>
        {taskName}
      </h3>
    </div>
  );
}

export default ListName;
