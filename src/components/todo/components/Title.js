import { InputBase, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import style from "../todo.module.css"
import storeApi from "../utils/storeApi";

export default function Title({ title, listId }) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { updateListTitle } = useContext(storeApi);
  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  };
  const handleOnBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen(false);
  };
  return (
    <div className={style.cardTitle}>
      {open ? (
        <div className={style.titleD}>
          <InputBase autoFocus value={newTitle} onBlur={() => setOpen(!open)} />
        </div>
      ) : (
        <div className={style.titleD}>
          <Typography onClick={() => setOpen(!open)}>{title}</Typography>
        </div>
      )}
    </div>
  );
}
