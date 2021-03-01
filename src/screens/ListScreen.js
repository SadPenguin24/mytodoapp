import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listById } from "../actions/listActions";

import TaskName from "../components/TaskName";

function createEntry(itemTerm) {
  return <TaskName _id={itemTerm._id} taskName={itemTerm.itemName} />;
}

function ListScreen({ match }) {
  const dispatch = useDispatch();

  const listDetails = useSelector((state) => state.listDetails);
  const { loading, error, listOne } = listDetails;

  useEffect(() => {
    dispatch(listById(match.params.id));
  }, [dispatch, match]);

  const items = listOne.items;

  console.log(items);
  console.log(items._id);

  return (
    <div>
      <h1>{listOne.listName}</h1>
      <hr />
      {loading ? <h3>loading</h3> : error ? <h3>{error}</h3> : <div></div>}
      <form>
        <input
          type="text"
          id="listName"
          name="listName"
          placeholder="Add List"
        />
        <button>Add</button>
        <hr />
      </form>
    </div>
  );
}

export default ListScreen;
