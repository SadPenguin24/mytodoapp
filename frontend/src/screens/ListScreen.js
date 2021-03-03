import "../css/screen.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listById } from "../actions/listActions";
import { getTask, addTask } from "../actions/taskActions";

import TaskName from "../components/TaskName";

function createEntry(itemTerm) {
  return <TaskName _id={itemTerm._id} taskName={itemTerm.itemName} />;
}

function ListScreen({ match }) {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const listDetails = useSelector((state) => state.listDetails);
  const { loading, error, listOne } = listDetails;

  const listTask = useSelector((state) => state.listTask);
  const { tasks } = listTask;

  useEffect(() => {
    dispatch(listById(match.params.id));
    dispatch(getTask(match.params.id));
  }, [dispatch, match]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTask(match.params.id, taskName));
  };

  return (
    <div>
      <h1>
        <Link className="backIcon" to="/" style={{ textDecoration: "none" }}>
          <span class="far fa-arrow-alt-circle-left"></span>
        </Link>
        {listOne.listName}
      </h1>
      {loading ? (
        <span>loading</span>
      ) : error ? (
        <span>{error}</span>
      ) : (
        <span>{tasks.map(createEntry)}</span>
      )}
      <form className="inputContainer">
        <input
          type="text"
          placeholder="Add Task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <span onClick={submitHandler}>
          <i class="fas fa-plus"></i>
        </span>
      </form>
    </div>
  );
}

export default ListScreen;
