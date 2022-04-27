import { Button, InputBase, Paper } from "@mui/material";
import React, { useContext, useState } from "react";
import style from "../../todo.module.css";
import storeApi from "../../utils/storeApi";

export default function InputCard({ setOpen, listId }) {
  const { addMoreCard } = useContext(storeApi);
  const [cardTitle, setCardTitle] = useState("");

  const handleOnChange = (e) => {
    setCardTitle(e.target.value);
  };
  const handleBtnConfirm = () => {
    addMoreCard(cardTitle, listId);
    setCardTitle("");
    setOpen(false);
  };

  const handleBlur = () => {
    setOpen(false);
  };
  return (
    <div>
      <div>
        <Paper className={style.input}>
          <InputBase
            onChange={handleOnChange}
            multiline
            fullWidth
            placeholder="Enter a value"
            autoFocus
            value={cardTitle}
          />
        </Paper>
      </div>
      <div className={style.btns}>
        <Button onClick={handleBtnConfirm} className={style.add}>
          Add card
        </Button>
        <Button
          onClick={() => setOpen(false)}
          className={style.button}
        ></Button>
      </div>
    </div>
  );
}
