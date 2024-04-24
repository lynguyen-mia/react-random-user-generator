import { useDispatch, useSelector } from "react-redux";

const Pagination = () => {
  const dispatch = useDispatch();
  const totalPage = useSelector((state) => state.totalPage);
  const curPage = useSelector((state) => state.curPage);

  function choosePageHandler(e) {
    dispatch({ type: "CHANGE_PAGE", curPage: Number(e.target.textContent) });
  }

  function cickNextHandler() {
    if (curPage === totalPage) return;
    dispatch({ type: "CHANGE_PAGE", curPage: curPage + 1 });
  }

  function clickPrevHandler() {
    if (curPage === 1) return;
    dispatch({ type: "CHANGE_PAGE", curPage: curPage - 1 });
  }

  return (
    <ul className="pagination mt-3 d-flex flex-wrap">
      <li
        className={`btn page-link ${curPage === 1 ? "disabled" : ""}`}
        onClick={clickPrevHandler}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </li>

      {Array.from({ length: totalPage }, (_, i) => (
        <li
          key={i}
          className={curPage === i + 1 ? "active page-link" : "page-link"}
          onClick={choosePageHandler}
        >
          {i + 1}
        </li>
      ))}

      <li
        className={`btn page-link ${curPage === totalPage ? "disabled" : ""}`}
        onClick={cickNextHandler}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </li>
    </ul>
  );
};

export default Pagination;
