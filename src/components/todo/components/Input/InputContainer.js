import { Collapse, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import InputCard from "./InputCard";
import style from "../../todo.module.css";

export default function InputContainer({ listId, type }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.Btn}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open} >
        <Paper onClick={() => setOpen(!open)} className={style.theme}>
          <Typography className={style.addBtn}>{type === 'card' ? '+ Add a Card' : '+ Add another List'}</Typography>
        </Paper>
      </Collapse>
    </div>
  );
}
