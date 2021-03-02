import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteList, starList, unStarList } from "../actions/listActions";

function ListName({ _id, listName, star }) {
  const dispatch = useDispatch();

  const starListHandler = (e) => {
    e.preventDefault();
    dispatch(starList(_id));
  };

  const unStarListHandler = (e) => {
    e.preventDefault();
    dispatch(unStarList(_id));
  };

  const deleteListHandler = (e) => {
    e.preventDefault();
    dispatch(deleteList(_id));
    console.log(_id);
  };

  return (
    <div>
      <h3>
        <Link to={`/lists/${_id}`}>{listName}</Link>
        <br />
        <button onClick={star ? unStarListHandler : starListHandler}>
          {star ? "yes" : "no"}
        </button>
        <button onClick={deleteListHandler}>Delete</button>
      </h3>
    </div>
  );
}

export default ListName;
