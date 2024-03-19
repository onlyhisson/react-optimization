import React from "react";

const ManyRendering = ({ onClick }) => {
  return (
    <>
      {Array.from({ length: 100 }, (_, i) => {
        if (i === 0) {
          console.log("Rendering last item : ", i);
        }
        return (
          <div key={i} onClick={onClick}>
            Hello, World {i}
          </div>
        );
      })}
    </>
  );
};

// export default ManyRendering;

// props 가 변경되지 않으면 리렌더링할 필요가 없다
export default React.memo(ManyRendering); // [A]
