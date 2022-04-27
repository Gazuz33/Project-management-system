import { Button, InputBase, Paper } from "@mui/material";
import React from "react";
import style from "../../todo.module.css";

export default function InputCard({ setOpen }) {
  return (
    <div>
      <div>
        <Paper className={style.input}>
          <InputBase
            multiline
            fullWidth
            placeholder="Enter a value"
            autoFocus      
            onBlur={() => setOpen(false)}
            
          />
        </Paper>
      </div>
      <div className={style.btns}>
        <Button onClick={() => setOpen(false)} className={style.add}>Add card</Button>
        <Button onClick={() => setOpen(false)} className={style.button}></Button>
      </div>
    </div>
  );
}
