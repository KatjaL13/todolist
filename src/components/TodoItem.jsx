function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <label>
        <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />

        <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
      </label>

      <button onClick={() => onDelete(todo.id)}>Löschen</button>
    </div>
  );
}

export default TodoItem;
