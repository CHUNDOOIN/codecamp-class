// 레이아웃 구성
import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";

// 사용패키지 구성
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const BodyWrapper = styled.div`
  display: flex;
`;

const Body = styled.div`
  height: 500px;
`;

const LayoutSidebar = styled.div`
  width: 100px;
  height: 500px;
  background-color: orange;
`;

const HIDEEN_HEADERS = ["/12-05-modal-refactoring"];
const HIDEEN_BANNER = ["/12-05-modal-refactoring"];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenHeader = HIDEEN_HEADERS.includes(router.asPath);
  const isHiddenBanner = HIDEEN_BANNER.includes(router.asPath);
  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenBanner && <LayoutBanner />}

      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSidebar>여기는 사이드바 입니다.!!!</LayoutSidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </>
  );
}
