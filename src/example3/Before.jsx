import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  // Primitive Type
  // const result = isTrue ? "O" : "X";

  // Reference Type
  const result = {
    ox: isTrue ? "O" : "X",
  };

  // 1. result를 Object 참조 타입으로 변경
  // 2. number 만 변경했으나 아래 훅이 실행됨, 값 자체만 보기에는 변경된 것이 없지만 result 재할당이 발생
  // 3. result 가 참조하는 주소가 변경되었기 때문에 아래 훅의 의존성 변경 조건에 해당함
  useEffect(() => {
    console.log("- result updated");
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
