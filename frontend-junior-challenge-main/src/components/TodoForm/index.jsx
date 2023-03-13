import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTasks } from "../../features/counter/counterSlice";
import "./styles.css";

const TodoForm = () => {

  const [tasks, setTask] = useState({
    title: '',
  })
  const dispacth = useDispatch()

  const handleChange = e => {
    setTask({
      ...tasks,
      [e.target.name]: e.target.value,
    })
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispacth(addTasks(tasks))
  }
  return (
  <div className="todo-form">New TODO'S:
  <form onSubmit={handleSubmit}>
    <input type="text" color="blue" placeholder="Enter new to do" onChange={handleChange }/>
    <button className="todo-button" >ADD TO DO</button>
  </form>
  </div>
  
)};

export default TodoForm;
