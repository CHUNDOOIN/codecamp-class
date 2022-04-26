import { ChangeEvent, useState } from "react";

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      alert("파일이 없습니다!");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImageUrl(data.target?.result);
      }
    };
  };

  // const onClickSubmit = () => {};

  return (
    <div>
      <input type="file" onChange={onChangeFile}></input>
      <img src={imageUrl}></img>
      {/* <button onClick={onClickSubmit}>게시글 등록하기</button> */}
    </div>
  );
}
