import { useState } from "react";

const hardCalculate = (number) => {
  console.log("# hardCalculate");
  for (let i = 0; i < 999999999; i++) {} // 의도적으로 지연
  return number + 10000;
};

/**
 * 1. hardNumber 값이 변경될 때마다 App 함수 컴포넌트가 호출(렌더링 발생)
 * 2. 해당 함수[A]가 랜더링시 반복적으로 실행되고 결과값이 hardNum에 재할당
 */

function App() {
  const [hardNumber, setHardNumber] = useState(1);

  // hardCalculate 의 결과값을 할당해야 하기 때문에 여기서 지연 발생
  const hardNum = hardCalculate(hardNumber); // [A]

  return (
    <div className="App">
      <h3>Hard Calculation</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(e.target.value)}
      />
      <span> + 10000 ={hardNum}</span>
    </div>
  );
}

export default App;
