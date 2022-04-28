import React, { useState } from "react";
import List from "./components/List";
import store from "./utils/store";
import storeApi from "./utils/storeApi";
import { v4 as uuid } from "uuid";
import InputContainer from "./components/Input/InputContainer";
import style from "./todo.module.css"

const ToDo = () => {
  const [data, setData] = useState(store);
  const addMoreCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };
  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };
  return (
    <storeApi.Provider value={{ addMoreCard, addMoreList }}>
      <div className={style.addCard}>
        {data.listIds.map((listId) => {
          const list = data.lists[listId];
          return <List list={list} key={listId} />;
        })}
        <InputContainer type="list" />
      </div>
    </storeApi.Provider>
  );
};
export default ToDo;
