import { useForm } from "react-hook-form";

interface IFormValues {
  writer?: string;
  title?: string;
  contents?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm();

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  console.log("리렌더링 체크!!");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <input type="text" {...register("mywriter")} />
      제목 : <input type="text" {...register("mytitle")} />
      내용 : <input type="text" {...register("mycontents")} />
      {/* 주소 : <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <button>등록하기</button>
    </form>
  );
}
