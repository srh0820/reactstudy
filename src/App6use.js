import React, { useState, useEffect } from "react";

function App() {
  const [ count, setCount ] = useState(0);
  const bgcolor = ["red", "green", "blue", "pink"];

  // useEffect 프로토타입
  // useEffect(()=>{}, [])
  // [] 가 비어있는 경우 - 딱 한번만 실행
  useEffect(()=>{
    document.body.style.backgroundColor = bgcolor[count];
  }, [count])
    // count 가 변경되면 그때마다 함수를 실행하겠다.

  return (
    <>
      <div className="App">
        <button onClick={() => {
          setCount( count < bgcolor.length -1 ? count + 1 : 0  ); // 대입식 절대 불가! 연산식만
        }}> {count} 증가 </button>

        <button onClick={() => {
          setCount( count > 0 ? count - 1 : bgcolor.length -1 );
        }}> {count} 감소 </button>
      </div>
      <div>
        {/* <button>1</button><button>2</button><button>3</button><button>4</button> */}
        {
          // this 의 여부에 따라서 function 또는 화살표함수로 결정
          bgcolor.map((v, i) => {
            return(
              <button onClick={()=> { setCount(i) }}>{v}</button>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
