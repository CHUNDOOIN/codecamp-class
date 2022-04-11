import { atom } from "recoil";

// 글로벌 스테이트 -> 어떤 컴포넌트에서 사용가능
export const isEditState = atom({
  key: "isEditState",
  default: false,
});
