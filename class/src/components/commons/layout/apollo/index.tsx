// import "../styles/globals.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // ===================================================================================

  // 1. 더이상 지원하지 않는다!
  // if( process.browser) {

  // } else {

  // }

  // window는 브라우저를 말한다.
  // 2. 두번째 방법
  if (typeof window !== "undefined") {
    console.log("여기는 브라우저다!!!");
    // const mylocalstoregeAccessToken = localStorage.getItem("accessToken");
    // setAccessToken(mylocalstoregeAccessToken || "");
  } else {
    console.log("여기는 프론트엔드 서버다!!! (yarn dev)");
  }

  // 3. 세번째 방법
  useEffect(() => {
    const mylocalstoregeAccessToken = localStorage.getItem("accessToken");
    setAccessToken(mylocalstoregeAccessToken || "");
  }, []);

  // 4. 프리렌더링시  문제되는 코드
  // const mylocalstoregeAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(mylocalstoregeAccessToken || "");

  // ===================================================================================

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    // headers: { Authorization: `bearer ${accessToken}` },
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}