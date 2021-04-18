import React, {FC} from "react";
import {ITask} from "../../../Interfaces";
import classes from './index.module.css';

type Props = {
    task : ITask,
}
const Task: FC<Props> = ({task}) => {
    return (
            <div className={classes.card}>
                <div className={classes.title}>{task.taskName}</div>
                <div className={classes.content}>
                    <div className={classes.text}>{task.taskDescription}</div>
                    <div className={classes.date}><span>{task.taskDate}</span></div>
                </div>
                <div className={classes.operations}>
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
            </div>
    )
}
export default Task;
