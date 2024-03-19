import { useCallback, useEffect, useMemo, useState } from "react";
import ManyRendering from "./ManyRendering";

/**
 * 리렌더린 변경 조건 2 가지
 * 1. state 변경
 * 2. props 변경
 */

function App() {
  const [state, setState] = useState(0);

  // hook으로 처리하지 않는 함수나 값은 매번 App()이 실행될 때마다 새로 생성
  // 매번 렌더링 될 때마다 다른 함수가 되는 것
  // 그렇기 때문에 아래서 ManyRendering 호출시 props가 변경된 조건이 되기 때문에 리렌더링이 됨
  const onClick = () => {};

  const value = { a: 1 };

  // useCallBack으로 감싸는 방법으로 리렌더링을 막는다.
  // [] 안에 의존성 데이터가 변경되지 않은 이상 onClick 은 새로운 메모리 주소에 재생성되지 않는다.
  // ManyRendering 컴포넌트의 commit phase 는 최적화 됨
  // 추가로 헤당 컴포넌트 React.memo 처리[A]를 해줘야 render phase 가 최적화됨
  const memorizationCallback = useCallback(() => {
    onClick();
  }, []);

  const memorizationValue = useMemo(() => {
    return value;
  }, []);

  // 리액트는 렌더링 과정에서 2가지 페이즈를 거친다.
  // 1. render phase : virtual DOM 을 만들고 실제 DOM과 비교해서 업데이트가 필요한 부분을 찾음
  // 2. commit phase :

  useEffect(() => {
    setTimeout(() => {
      setState(1);
      console.log("updated");
    }, 1000);
  }, []);
  return (
    <div className="App">
      {/* <ManyRendering onClick={onClick} />*/}
      <ManyRendering onClick={memorizationCallback} />
    </div>
  );
}

export default App;
