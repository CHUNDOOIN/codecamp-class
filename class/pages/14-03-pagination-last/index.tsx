import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const MyRow = styled.div`
  display: flex;
`;
const MyCal = styled.div`
  /* width: 25%; */
`;

export default function MapBoardPage() {
  const [nowBoardNum, setNowBoardNum] = useState(0);
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardCount?.fetchBoardsCount / 10);

  const OnclickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
    if (Number(event.target.id - 1) * 10 >= 0) {
      setNowBoardNum(Number(event.target.id - 1) * 10);
    }
  };
  const OnClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
  };
  const OnClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any, index: any) => (
        <MyRow key={el._id}>
          <MyCal>
            {dataBoardCount?.fetchBoardsCount - index - nowBoardNum}
          </MyCal>

          <MyCal>{el.writer}</MyCal>
          <MyCal>{el.title}</MyCal>
        </MyRow>
      ))}
      <span onClick={OnClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <span
              key={index + startPage}
              onClick={OnclickPage}
              id={String(index + startPage)}
            >
              {index + startPage}
            </span>
          )
      )}
      <span onClick={OnClickNextPage}>다음페이지</span>
    </div>
  );
}
