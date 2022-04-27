import { InputBase, Typography } from "@mui/material";
import React, { useState } from "react";
import style from "../todo.module.css"


export default function Title() {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.cardTitle}> 
      {open ? (
        <div className={style.titleD}>
          <InputBase autoFocus value="Todo" onBlur={()=>setOpen(!open)} />
        </div>
      ) : (
        <div className={style.titleD}>
          <Typography  onClick={()=> setOpen(!open)}>ToDo</Typography>
        </div>
      )}
    </div>
  );
}
