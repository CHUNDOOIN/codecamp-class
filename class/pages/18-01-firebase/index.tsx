import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";

import { firebaseApp } from "../_app";

export default function FireBasePage() {
  const onClickSubmit = async () => {
    // 파이어베이스에 데이저 한줄 등록하기
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer: "철수",
      title: "제목",
      contents: "내용!!",
    });
  };

  const onClickFetch = async () => {
    // 파이어베이스에서 데이터 꺼내오기
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const datas = result.docs.map((el) => el.data());
    console.log(datas);
  };

  return (
    <div>
      <div>파이어베이스 연습!!!</div>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조회하기</button>
    </div>
  );
}
