import React, { useEffect, useState } from "react";
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
  const { loadingTask, errorTask, tasks } = listTask;

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
      <h1>{listOne.listName}</h1>
      <hr />
      {loading ? (
        <h3>loading</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <span>{tasks.map(createEntry)}</span>
      )}
      <form>
        <input
          type="text"
          placeholder="Add task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button onClick={submitHandler}>Add</button>
        <hr />
      </form>
    </div>
  );
}

export default ListScreen;
