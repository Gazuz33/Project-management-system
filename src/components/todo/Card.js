import { Paper } from "@mui/material";
import React from "react";
import style from "./todo.module.css"

export default function Card() {
    return (
        <div>
            <Paper className={style.item}>Make a cake</Paper>
        </div>
    )
}