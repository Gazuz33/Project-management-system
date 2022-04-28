import { Paper } from "@mui/material";
import React from "react";
import style from "./todo.module.css"

export default function Card({ card }) {
    return (
        <div className={style.cardBlock}>
            <Paper className={style.item}>{card.title}</Paper>
        </div>
    )
}