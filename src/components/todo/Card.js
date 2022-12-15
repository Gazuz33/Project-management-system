import { Paper } from "@mui/material";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import style from "./todo.module.css"

export default function Card({ card, index }) {
    return (
        <Draggable draggableId={card.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                >
                    <Paper className={style.item}>{card.title}</Paper>
                </div>
            )}
        </Draggable>
    )
}

