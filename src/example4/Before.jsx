import React, { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  // 함수도 객체이기 때문에 App이 호출될 때마다 초기화 됨
  // A 라인이 실행됨 = logFunction 초기회
  // 함수가 메모리를 차지하고 해당 참조값을 logFunction에 저장
  // 해당 데이터의 메모리 참조값이 계속 변경됨
  const logFunction = () => {
    console.log(`logFunction : ${number}`);
    return;
  };

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
      <br />
      <button type="button" onClick={logFunction}>
        call log function
      </button>
    </div>
  );
}

export default App;
