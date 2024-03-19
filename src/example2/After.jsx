import { useMemo, useState } from "react";

const hardCalculate = (number) => {
  console.log("# hardCalculate");
  for (let i = 0; i < 999999999; i++) {}
  return number + 10000;
};

const easyCalculate = (number) => {
  console.log("# easyCalculate");
  return number + 1;
};

/**
 * 1. hardNumber 나 easyNumber 의 둘 중 하나의 값에서 변경이 일어났을 때 둘 다 재할당이 발생하는 이슈가 있음(A, B)
 * 2. 각 값을 Memoization 한다.
 * 3. useMemo로 감싸면 Memoization 하기 때문에 반복되는 계산을 할 필요가 없이 해당 변수 값을 재사용할 수 있음(각 변수값의 변경에 따라 서로 영향을 받지 않는다.)
 */

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // 1번째 인자는 해당 함수가 리턴한 값이 useMemo 의 결과값이 됨
  // 2번째 인자는 해당 인자가 업데이트된 경우 1번째 인자의 결과를 다시 계산해서 Memoization 함
  // 빈 배열의 경우에는 맨처음 컴포넌트가 마운트될 때만 1번째의 인자의 함수를 계산해서 Memoization 함
  const hardNum = useMemo(() => hardCalculate(hardNumber), [hardNumber]); // [A]
  const easyNum = useMemo(() => easyCalculate(easyNumber), [easyNumber]); // [B]

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
