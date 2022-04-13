import { AppProps } from "next/app";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { RecoilRoot } from "recoil";

import ApolloSetting from "../src/components/commons/layout/apollo";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjfa9X6LF6FJ4elvuZaF0i9Px4rDD2MvI",
  authDomain: "dooin2.firebaseapp.com",
  projectId: "dooin2",
  storageBucket: "dooin2.appspot.com",
  messagingSenderId: "821489427687",
  appId: "1:821489427687:web:c4a43155d5ae49fe492e42",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
