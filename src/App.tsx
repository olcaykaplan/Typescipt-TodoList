import React, {FC, ChangeEvent ,useState} from 'react';
import './App.css';
import {ITask} from './Interfaces'
import TodoList from "./Components/TodoList";
import classes from "./Components/TodoList/Task/index.module.css";
const  App: FC = () => {

  const [task, setTask] = useState<ITask>({
    taskName:"",
    taskDescription:"",
    taskDate: (new Date).toString(),
  })
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>):void => {
    setTask({...task, [e.target.name] : e.target.value})
  }
  const handleClick = (): void => {
    const newTask = {taskName: task.taskName, taskDescription: task.taskDescription, taskDate: task.taskDate}
    setTodoList([...todoList, newTask] )
    setTask({taskName:"", taskDescription:"", taskDate:(new Date()).toString()})
  }

  return (
      <div className="App">
        <div className="header">
          <input type="text"  placeholder="task..." value={task.taskName} name="taskName" onChange={handleChange}/>
          <input type="text" placeholder="decription" value={task.taskDescription} name="taskDescription" onChange={handleChange}/>
          <input type="date" placeholder="End Date"  name="taskDate" onChange={handleChange}/>
          <button onClick={handleClick}>Add Task</button>
        </div>
        <TodoList todoList={todoList} />
      </div>
  );
}

export default App;
