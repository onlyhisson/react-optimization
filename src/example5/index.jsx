import { useState } from "react";

function createInitialTodos() {
  console.log("Todo list 함수 호출됨");
  const initialTodos = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: "Item " + (i + 1),
    });
  }
  return initialTodos;
}

export default function TodoList() {
  //const [todos, setTodos] = useState(createInitialTodos()); // A
  const [todos, setTodos] = useState(createInitialTodos); // B
  //const [todos, setTodos] = useState(() => createInitialTodos()); // C
  const [text, setText] = useState(""); // D

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setText("");
          setTodos([
            {
              id: todos.length,
              text: text,
            },
            ...todos,
          ]);
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}
