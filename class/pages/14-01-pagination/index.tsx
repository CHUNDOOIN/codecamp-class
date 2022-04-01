import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

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

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  /* width: 25%; */
`;

export default function MapBoardPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      <span>이전페이지</span>
      {new Array(10).fill(1).map((_, index) => (
        // <span key={el} onClick={onClickPage} id={String(el)}>
        //   {el}
        // </span>
        <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
      <span>다음페이지</span>
      {/* 
      <span onClick={onClickPage} id="2">
        2
      </span>
      <span onClick={onClickPage} id="3">
        3
      </span> */}
    </div>
  );
}
