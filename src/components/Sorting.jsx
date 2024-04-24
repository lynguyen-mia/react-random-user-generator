import { useDispatch, useSelector } from "react-redux";

const Sorting = (props) => {
  const dispatch = useDispatch();
  const sortDirection = useSelector((state) => state.sortDirection);
  const sortBy = useSelector((state) => state.sortBy);

  function sortByHandler(e) {
    dispatch({ type: "SORT_BY", sortBy: e.target.value });
  }

  function sortDirectionHandler(e) {
    dispatch({ type: "SORT_DIRECTION", sortDirection: e.target.value });
  }

  return (
    <div className="d-flex gap-3 mb-5">
      {/* Sort by */}
      <select
        name="cars"
        id="cars"
        className="btn btn-outline-secondary"
        onChange={sortByHandler}
        value={sortBy}
      >
        <option value="username">Username </option>
        <option value="fullname">Fullname</option>
      </select>

      {/* Sort direction */}
      <select
        name="cars"
        id="cars"
        className="btn btn-outline-secondary"
        onChange={sortDirectionHandler}
        value={sortDirection}
      >
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  );
};

export default Sorting;
