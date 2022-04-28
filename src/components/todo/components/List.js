import { Paper } from "@mui/material";
import React from "react";
import Title from "./Title";
import Card from "../Card";
import InputContainer from "./Input/InputContainer";
import style from "../todo.module.css";
import { Droppable } from 'react-beautiful-dnd';

export default function List({ list }) {
  return (
    <div>
      <Paper className={style.card}>
        <Title title={list.title} listId={list.id} />
        <Droppable droppableId={list.id}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {list.cards.map((card, index) => (
                <Card key={card.id} card={card} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <InputContainer listId={list.id} type="card" />
      </Paper>
    </div>
  );
}
