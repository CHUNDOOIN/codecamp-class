import { Component } from "react";

interface IState {
  count: number;
}

export default class CounterPage extends Component {
  state = {
    count: 99,
  };

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
  onClickCounter() {
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count - 1,
    }));
  }

  render() {
    return (
      <div>
        <div>현재 카운트 : {this.state.count}</div>
        <button onClick={this.onClickCounter.bind(this)}>
          카운트 올리기!!!
        </button>
      </div>
    );
  }
}
