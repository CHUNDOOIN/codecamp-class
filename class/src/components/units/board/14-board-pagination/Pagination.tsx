import { useState } from "react";

export default function Pagination(props) {
  const [startPage, setStartPage] = useState(1);

  const OnclickPage = (event) => {
    props.refetch({ page: Number(event.target.id) });
  };

  const OnClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };

  const OnClickNextPage = () => {
    if (startPage + 10 > props.lastPage) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };

  return (
    <div>
      <span onClick={OnClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= props.lastPage && (
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
