import Board from "../../src/components/units/board/14-board-pagination/board";
import Pagination from "../../src/components/units/board/14-board-pagination/Pagination";
import { useQuery, gql } from "@apollo/client";

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

const FETCH_BOARD_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function MapBoardPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const { data: dataBoardCount } = useQuery(FETCH_BOARD_COUNT);
  const lastPage = Math.ceil(dataBoardCount?.fetchBoardsCount / 10);

  return (
    <div>
      <Board data={data}></Board>
      <Pagination refetch={refetch} lastPage={lastPage}></Pagination>
    </div>
  );
}
