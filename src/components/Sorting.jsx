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
    <div className="d-flex gap-3 mb-3 justify-content-center">
      {/* Sort by */}
      <select
        name="sortBy"
        id="sortBy"
        className="btn btn-outline-secondary"
        onChange={sortByHandler}
        value={sortBy}
      >
        <option value="Sort By" hidden>
          Sort By
        </option>
        <option value="Sort By">None</option>
        <option value="username">Username</option>
        <option value="fullname">Fullname</option>
      </select>

      {/* Sort direction */}
      <select
        name="sortDirection"
        id="sortDirection"
        className="btn btn-outline-secondary"
        onChange={sortDirectionHandler}
        value={sortDirection}
      >
        <option value="Sort Direction" hidden>
          Sort Direction
        </option>
        <option value="Sort Direction">None</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  );
};

export default Sorting;
