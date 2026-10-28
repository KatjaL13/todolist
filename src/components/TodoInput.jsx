import { useState } from "react";

function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (text.trim() === "") return;

    onAdd(text.trim());
    setText("");
  }

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(event) => setText(event.target.value)} />

      <button type="submit">Add</button>
    </form>
  );
}

export default TodoInput;
