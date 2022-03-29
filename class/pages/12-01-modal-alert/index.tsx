import { Modal } from "antd";

export default function ModalAlertPage() {
  const onClickSuccessButton = () => {
    Modal.success({
      content: "게시물 등록 성공!",
    });
  };
  const onClickFailButton = () => {
    Modal.error({
      title: "This is an error message",
      content: "게시물 등록 실패!",
    });
  };

  return (
    <div>
      <button onClick={onClickSuccessButton}>성공!!!</button>
      <button onClick={onClickFailButton}>실패!!!</button>
    </div>
  );
}
