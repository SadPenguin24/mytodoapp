import React from "react";
import { Link } from "react-router-dom";

function ListName({ _id, listName, star }) {
  return (
    <div>
      <h3>
        <Link to={`/lists/${_id}`}>{listName}</Link>
      </h3>
      <div>{star ? <span>yes</span> : <span>no</span>}</div>
    </div>
  );
}

export default ListName;
