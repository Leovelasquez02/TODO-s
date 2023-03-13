import React, {useEffect} from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { gestTasks } from "../../features/counter/counterSlice";

const TodoList = () => {
/*
  const {data: todos, isError, isLoading, error} =
   useGetTodosQuery()

   if (isLoading) return <div>Loading</div>;
   else if (isError) return <div>Error: {error.message}</div>;
    
*/

  const {tasks, loading} = useSelector((state) => state.tasks)
  console.log(tasks)
  const dispatch  = useDispatch()
  useEffect(() => {
    dispatch(gestTasks())
  }, []);

  if (loading) {
    return <h4>Loading...</h4>
  }

  const handleDelete = (todoId) => {
    // Fix an ability to delete task
  };

  const toggleCheck = (todoId, isChecked) => {
    // Fix an ability to toggle task
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content">
      <div key={tasks.id}>
        {tasks.map((item) => (
          <p>{item.label}</p>
        ))}
      </div>
      </div>
      <div className="no-todos">
        Looks like you&apos;re absolutely free today!
      </div>
    </div>
  );
};

export default TodoList;
