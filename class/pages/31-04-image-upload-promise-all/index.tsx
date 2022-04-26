import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const [createBoard] = useMutation(CREATE_BOARD);

  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile =
    (number: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) {
        alert("파일이 없습니다!");
        return;
      }

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (data) => {
        if (typeof data.target?.result === "string") {
          const tempUrls = [...imageUrls];
          tempUrls[number] = data.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[number] = file;

          setFiles(tempFiles);
        }
      };
    };

  const onClickSubmit = async () => {
    const results = await Promise.all(
      // 1. 초간단
      files.map((el) => el && uploadFile({ variables: { file: el } }))
    );

    const resultUrls = results.map((el) =>
      el?.data ? el?.data?.uploadFile.url : ""
    );

    // 2. 맵
    // files.map((el) => {
    //   return el && uploadFile({ variables: { file: el } });
    //   // return el ? uploadFile({ variables: { file: el } }) : undefined;

    // 3. 이프문
    //   // if (el) {
    //   //   return uploadFile({ variables: { file: el } });
    //   // } else {
    //   //   return undefined;
    //   // }
    // });

    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "안녕하세요~",
          contents: "이미지 업로드 입니다~",
          images: resultUrls,
        },
      },
    });
    console.log(result2.data.createBoard._id);
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile(0)}></input>
      <input type="file" onChange={onChangeFile(1)}></input>
      <input type="file" onChange={onChangeFile(2)}></input>
      <img src={imageUrls[0]}></img>
      <img src={imageUrls[1]}></img>
      <img src={imageUrls[2]}></img>
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </div>
  );
}
