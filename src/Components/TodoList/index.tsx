import React, {FC} from "react";
import {ITask} from "../../Interfaces";
import Task from "./Task";
import classes from './index.module.css';

type Props = {
    todoList: ITask[],
}

const TodoList: FC<Props> = ({todoList}) => {
    return (
        <div className={classes.todoList}>
            { todoList.map(task => (
                <Task task={task}/>
            ))}
        </div>

    )
}

export default TodoList;
