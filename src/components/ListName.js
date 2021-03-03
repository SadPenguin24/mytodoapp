import React from "react";
import "../css/listName.css";
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
      <span className="listName">
        <Link
          className="name"
          to={`/lists/${_id}`}
          style={{ textDecoration: "none" }}
        >
          <span>{listName}</span>
        </Link>

        <div className="space" />

        <div className="icon">
          <i onClick={star ? unStarListHandler : starListHandler}>
            {star ? <i class="fas fa-star"></i> : <i class="far fa-star"></i>}
          </i>
          <i onClick={deleteListHandler}>
            <i class="fas fa-trash"></i>
          </i>
        </div>
      </span>
    </div>
  );
}

export default ListName;
