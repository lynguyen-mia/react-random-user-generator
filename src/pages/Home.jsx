import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserTable from "../components/UserTable";
import Pagination from "../components/Pagination";
import Sorting from "../components/Sorting";
import Loader from "../components/Loader";

const HomePage = () => {
  const dispatch = useDispatch();
  const curPage = useSelector((state) => state.curPage);
  const userPerPage = useSelector((state) => state.userPerPage);
  const sortBy = useSelector((state) => state.sortBy);
  const sortDirection = useSelector((state) => state.sortDirection);
  const [isLoading, setIsloading] = useState(true);

  function compareFullname(a, b) {
    const fullnameA = a.name.first + a.name.last;
    const fullnameB = b.name.first + b.last;
    return fullnameA.localeCompare(fullnameB);
  }

  function compareUsername(a, b) {
    return a.login.username.localeCompare(b.login.username);
  }

  function sorting(userList, sortBy, sortDirection) {
    const sortFunction =
      sortBy === "fullname" ? compareFullname : compareUsername;
    userList.sort((a, b) => {
      return sortDirection === "ascending"
        ? sortFunction(a, b)
        : sortFunction(b, a);
    });
  }

  useEffect(() => {
    async function getUsers() {
      try {
        setIsloading(true);
        const res = await fetch(
          `https://randomuser.me/api/?page=${curPage}&results=${userPerPage}`
        );
        const data = await res.json();
        const userArr = data.results;

        sorting(userArr, sortBy, sortDirection);
        dispatch({ type: "FETCH_USERS", userList: userArr });
        setIsloading(false);
      } catch (err) {
        console.log(err);
      }
    }
    getUsers();
  }, [curPage, userPerPage, sortBy, sortDirection]);

  return (
    <div className="container my-5">
      <div className="d-flex flex-column align-items-center">
        <div className="mb-3 text-center">
          <div>
            Display a maximum of 100 users, showing 10 random users at a time.
          </div>
          <div>Sort results based on fullname or username.</div>
        </div>
        {/* Sorting */}
        <Sorting />

        <h1 className="fs-4 text-center">User List</h1>
        {/* Pagination */}
        <Pagination />

        {/* User table */}
        {isLoading ? <Loader /> : <UserTable />}
      </div>
    </div>
  );
};

export default HomePage;
