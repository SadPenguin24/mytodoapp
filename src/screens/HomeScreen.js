import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lists } from "../actions/listActions";

import ListName from "../components/ListName";

function createEntry(listTerm) {
  return (
    <ListName
      _id={listTerm._id}
      listName={listTerm.listName}
      star={listTerm.star}
    />
  );
}

function HomeScreen() {
  const dispatch = useDispatch();

  const allList = useSelector((state) => state.allList);
  const { loading, error, list } = allList;

  useEffect(() => {
    dispatch(lists());
  }, [dispatch]);

  console.log(list);

  return (
    <div>
      <h1>My List</h1>
      <hr />
      {loading ? (
        <h3>loading</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div>{list.map(createEntry)}</div>
      )}
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

export default HomeScreen;
