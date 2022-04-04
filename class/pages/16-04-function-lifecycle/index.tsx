import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

// interface IState {
//   count: number;
// }

export default function CounterPage() {
  const router = useRouter();

  // inputRef = createRef<HTMLInputElement>();
  const inputRef = useRef<HTMLInputElement>(null);

  const [count, setCount] = useState(99);

  // 1. DidMount
  // componentDidMount() {
  //   console.log("마운트됨!!!");
  //   this.inputRef.current?.focus();
  //   // 포커스 깜빡깜빡
  // }
  // useEffect(() => {
  //   console.log("마운트됨!!!");
  //   inputRef.current?.focus();
  // }, []);

  // 2. DidUpdate (이친구는 처음에 한번은 실행 됨! 클래스형과 다름)
  // componentDidUpdate() {
  //   console.log("수정되고 다시 그려짐!!!!!");
  // }
  useEffect(() => {
    console.log("수정되고 다시 그려짐!!!!!");
  }, [count]);

  // 3. WillUnmount
  // componentWillUnmount() {
  //   console.log("컴포넌트 사라짐!!!!!");
  //   // 채팅방 나가기
  //   // api 요청!!!
  // }
  // useEffect(() => {
  //   return () => {
  //     console.log("컴포넌트 사라짐!!!!!");
  //   };
  // }, []);

  // 4. DidMount와 WillUnmount를 합치기!
  useEffect(() => {
    console.log("마운트됨!!!");
    inputRef.current?.focus();

    return () => {
      console.log("컴포넌트 사라짐!!!!!");
    };
  }, []);

  // 5. useEffect의 잘못된 사용 예 (1. 추가 렌더링, 2. 무한루프)
  // -> 가급적 setState를 빼는게 좋다. 불필요한 렌더링이 발생한다.
  // -> 아래와 같이 코드 작성시 무한루프....
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  //   onClickCounter = () => {
  //     console.log(this.state.count);
  //     this.setState((prev: IState) => ({
  //       count: prev.count - 1,
  //     }));
  //     // this.setState({
  //     //   count: this.state.count + 1,
  //     // });
  //   };

  // 화살표 함수가 아닐때에는 윈도우를 가리킨다..ㅜ.ㅜ
  const onClickCounter = () => {
    // console.log(this.state.count);
    // this.setState((prev: IState) => ({
    //   count: prev.count - 1,
    // }));
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  console.log("나는 언제 실행되게???????");

  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>현재 카운트 : {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!!</button>
      <button onClick={onClickMove}>나가기!!!</button>
    </div>
  );
}
