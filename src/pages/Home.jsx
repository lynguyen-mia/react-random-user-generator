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
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      try {
        setIsloading(true);
        const res = await fetch(
          `https://randomuser.me/api/?page=${curPage}&results=${userPerPage}`
        );
        const data = await res.json();
        const userArr = data.results;

        dispatch({ type: "FETCH_USERS", userList: userArr });
        setIsloading(false);
      } catch (err) {
        console.log(err);
      }
    }
    getUsers();
  }, [curPage, userPerPage, dispatch]);

  return (
    <div className="container my-4">
      <div className="d-flex flex-column align-items-center">
        <div className="mb-3 text-center">
          <div>
            Display a maximum of 100 users, showing 10 random users at a time.
          </div>
          <div>Sort loaded results based on fullname or username.</div>
        </div>

        <Sorting />

        <Pagination />

        {isLoading ? <Loader /> : <UserTable />}
      </div>
    </div>
  );
};

export default HomePage;
