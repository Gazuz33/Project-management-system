import { Paper } from "@mui/material";
import React from "react";
import Title from "./Title";
import Card from "../Card";
import InputContainer from "./Input/InputContainer";
import style from "../todo.module.css";

export default function List({ list }) {
  return (
    <div>
      <Paper className={style.card}>
        <Title title={list.title} listId={list.id} />
        {list.cards.map((card) => (
          <Card card={card} />
        ))}
        <InputContainer listId={list.id} type="card" />
      </Paper>
    </div>
  );
}
