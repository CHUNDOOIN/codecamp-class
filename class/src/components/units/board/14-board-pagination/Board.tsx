import styled from "@emotion/styled";

const MyRow = styled.div`
  display: flex;
`;

const MyCal = styled.div`
  /* width: 25%; */
`;

export default function Board(props) {
  return (
    <div>
      {props.data?.fetchBoards.map((el: any) => (
        <MyRow key={el._id}>
          <MyCal>{el.writer}</MyCal>
          <MyCal>{el.title}</MyCal>
        </MyRow>
      ))}
    </div>
  );
}
