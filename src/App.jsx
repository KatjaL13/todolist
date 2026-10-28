import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  // Todos aus localStorage laden
  const [todos, setTodos] = useState(() => {
    try {
      const savedTodos = localStorage.getItem("todos");

      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch {
      return [];
    }
  });

  // Todos im localStorage speichern
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Neues Todo hinzufügen
  function addTodo(text) {
    const newTodo = {
      id: crypto.randomUUID(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  }

  // Todo abhaken
  function toggleTodo(id) {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  }

  // Todo löschen
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="app">
      <TodoInput onAdd={addTodo} />

      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
