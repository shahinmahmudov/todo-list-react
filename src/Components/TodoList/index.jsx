import React from "react";

function TodoList({ todos, completeTodo, removeTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <div className="todo-item">
            <span
              style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
            >
              {todo.text}
            </span>
            <div>
              <button onClick={() => completeTodo(index)}>Complete</button>
              <button onClick={() => removeTodo(index)}>x</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
