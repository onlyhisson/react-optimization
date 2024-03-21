import React, { useEffect, useState, useCallback } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  // 2번째 인자의 의존성이 없을 경우 첫번쩨 인자의 함수가 초기화 시점의 number 값을 사용
  // 2번째 인자에 함수 내에서 사용하는 state 값을 의존성 추가한다.
  // state 를 number 단독으로 사용할 때는 메모이제이션의 이득이 없음
  // B가 있어야 의미가 있다.
  const logFunction = useCallback(() => {
    console.log(`logFunction : ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log(`logFunction is updated!!!`); // [A]
  }, [logFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button type="button" onClick={logFunction}>
        call log function
      </button>
    </div>
  );
}

export default App;
