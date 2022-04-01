import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

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
  width: 25%;
`;

const Scroll = styled.div`
  height: 700px;
  overflow: auto;
`;

export default function MapBoardPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <Scroll>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {data?.fetchBoards.map((el: any) => (
          <MyRow key={el._id}>
            <MyColumn></MyColumn>
            <MyColumn>{el._id}</MyColumn>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
          </MyRow>
        ))}{" "}
        || <div></div>
      </InfiniteScroll>
    </Scroll>
  );
}
