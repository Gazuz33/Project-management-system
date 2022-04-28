import { Button, InputBase, Paper } from "@mui/material";
import React, { useContext, useState } from "react";
import style from "../../todo.module.css";
import storeApi from "../../utils/storeApi";

export default function InputCard({ setOpen, listId, type }) {
  const { addMoreCard, addMoreList } = useContext(storeApi);
  const [title, setTitle] = useState("");
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const handleBtnConfirm = () => {
    if (type === 'card') {
      addMoreCard(title, listId);
      setTitle('');
      setOpen(false);
    } else {
      addMoreList(title);
      setTitle('');
      setOpen(false);
    }
  };
  return (
    <div>
      <div>
        <Paper className={style.input}>
          <InputBase
            onChange={handleOnChange}
            multiline
            autoFocus
            value={title}
            placeholder={
              type === "card"
                ? "Enter a title of this card.."
                : "Enter list title..."
            }
          />
        </Paper>
      </div>
      <div className={style.btns}>
        <Button onClick={handleBtnConfirm} className={style.add}>
          {type === "card" ? "Add Card" : "Add List"}
        </Button>
        <Button
          onClick={() => setOpen(false)}
          className={style.button}
        ></Button>
      </div>
    </div>
  );
}
