import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lists, addList} from "../actions/listActions";

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
  const [listName, setListName] = useState("");
  const dispatch = useDispatch();

  const allList = useSelector((state) => state.allList);
  const { loading, error, list } = allList;

  useEffect(() => {
    dispatch(lists());
  }, [dispatch]);

  const addListHandler = (e) => {
    e.preventDefault();
    dispatch(addList(listName));
  };
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
          placeholder="Add List"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        />
        <button onClick={addListHandler}>Add</button>
        <hr />
      </form>
    </div>
  );
}

export default HomeScreen;
