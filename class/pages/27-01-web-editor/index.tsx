// import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPAge() {
  const onChangeContents = (value: string) => {
    console.log(value);
  };
  return (
    <div>
      작성자 : <input type="text" />
      <br />
      비밀번호 : <input type="password" />
      <br />
      제목 : <input type="text" />
      <br />
      내용 : <ReactQuill onChange={onChangeContents} />
      {/* 우리가 쓰는 온체인지가 아니다.. 라이브러리 만든 사람이 만든 온체인지 -> 입력하면 값이 바로 들어간다. */}
      <br />
      <button>등록하기</button>
    </div>
  );
}
