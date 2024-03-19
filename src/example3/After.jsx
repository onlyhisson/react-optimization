import { useState, useEffect, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  // Reference Type
  const result = useMemo(() => {
    return {
      ox: isTrue ? "O" : "X",
    };
  }, [isTrue]);

  useEffect(() => {
    console.log("- result updated!");
  }, [result]);

  return (
    <div>
      <h2>Input 1</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2> Is true?</h2>
      <p> TRUE : {result.ox}</p>
      <button type="button" onClick={() => setIsTrue(!isTrue)}>
        UPDATE
      </button>
    </div>
  );
}

export default App;
