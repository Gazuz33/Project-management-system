import { Collapse, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import InputCard from "./InputCard";
import style from "../../todo.module.css"

export default function InputContainer() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} />
      </Collapse>
      <Collapse in={!open}>
        <Paper onClick={() => setOpen(!open)}>
          <Typography className={style.addBtn}>Add a card</Typography>
        </Paper>
      </Collapse>
    </div>
  );
}
