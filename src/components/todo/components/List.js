import { Paper } from "@mui/material";
import React from "react";
import Title from "./Title";
import Card from "../Card";
import InputContainer from "./Input/InputContainer";
import style from "../todo.module.css";
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from "react-beautiful-dnd";

export default function List({ list, index }) {
  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <Paper className={style.card} {...provided.dragHandleProps}>
            <Title title={list.title} listId={list.id} />
            <Droppable droppableId={list.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={style.cardContainer}
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
      )}
    </Draggable>
  );
}