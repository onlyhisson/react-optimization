import { useState } from "react";

const hardCalculate = (number) => {
  console.log("# hardCalculate");
  for (let i = 0; i < 999999999; i++) {} // 의도적으로 지연
  return Number(number) + 10000;
};

const easyCalculate = (number) => {
  console.log("# easyCalculate");
  return Number(number) + 1;
};

/**
 * 1. Easy Calculation 의 input 값을 변경할 경우 easyNumber 값이 변경되고
 * 2. App 이 재호홀 된다(랜더링이 발생)
 * 3. 이때 A, B 라인의 각 함수가 실행되고 각 변수에 결과값이 할당 된다.
 * 4. easyNumber 만 변경했을 뿐인데 hardCalculate이 실행되고 Easy Calculation 의 value 값 변경에서도 지연이 발생
 */

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const hardNum = hardCalculate(hardNumber); // [A]
  const easyNum = easyCalculate(easyNumber); // [B]

  return (
    <div className="App">
      <h3>Hard Calculation</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(e.target.value)}
      />
      <span> + 10000 ={hardNum}</span>
      <hr />
      <h3>Easy Calculation</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(e.target.value)}
      />
      <span> + 1 ={easyNum}</span>
    </div>
  );
}

export default App;
