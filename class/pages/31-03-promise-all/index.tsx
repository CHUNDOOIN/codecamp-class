export default function PromiseAllPage() {
  const onClickPromise = async () => {
    console.time("Promise 시작!!!");

    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("http://dog1.jpg");
      }, 3000);
    });
    console.log(result1);

    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("http://dog2.jpg");
      }, 1000);
    });
    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("http://dog3.jpg");
      }, 2000);
    });
    console.log(result3);

    console.timeEnd("Promise 시작!!!");
  };

  const onClickPromiseAll = async () => {
    // 1. 하나하나씩 확인하는 방법!
    // console.time("프로미스올 시작!");
    // const result = await Promise.all([
    //   // 프로미스들의 배열에 들어간다.
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("http://dog1.jpg");
    //     }, 3000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("http://dog2.jpg");
    //     }, 3000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("http://dog3.jpg");
    //     }, 3000);
    //   }),
    // ]);
    // console.log(result);
    // console.timeEnd("프로미스올 시작!");

    // 2. 한번에 확인하는 방법!
    console.time("프로미스올 시작!");

    const result = await Promise.all(
      ["http://dog1.jpg", "http://dog2.jpg", "http://dog3.jpg"].map(
        (el) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 3000);
          })
      )
    );

    console.log(result);
    console.timeEnd("프로미스올 시작!");
  };

  return (
    <div>
      <button onClick={onClickPromise}>Promise 연습하기!!</button>
      <button onClick={onClickPromiseAll}>Promise.all 연습하기!!</button>
    </div>
  );
}
