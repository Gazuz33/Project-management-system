import {Paper} from "@mui/material";
import React from "react";
import Title from "./Title";
import Card from "../Card";
import InputContainer from "./Input/InputContainer";
import style from "../todo.module.css"

export default function List() {
    return (
        <div>
            <Paper className={style.card}>
                <Title />
                <Card />
                <Card />
                <Card />
                <InputContainer />
            </Paper>
        </div>
    )
}