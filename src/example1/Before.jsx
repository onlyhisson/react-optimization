import { useCallback, useEffect, useMemo, useState } from "react";
import ManyRendering from "./ManyRendering";

function App() {
  const [state, setState] = useState(0);

  const onClick = () => {};

  const value = { a: 1 };

  useEffect(() => {
    setTimeout(() => {
      setState(1);
      console.log("updated");
    }, 1000);
  }, []);
  return (
    <div className="App">
      <ManyRendering onClick={onClick} />
    </div>
  );
}

export default App;
