import { useSelector } from "react-redux";
import { useMemo } from "react";

const UserTable = () => {
  const userList = useSelector((state) => state.userList);
  const sortBy = useSelector((state) => state.sortBy);
  const sortDirection = useSelector((state) => state.sortDirection);

  function compareFullname(a, b) {
    const fullnameA = a.name.first + a.name.last;
    const fullnameB = b.name.first + b.last;
    return fullnameA.localeCompare(fullnameB);
  }

  function compareUsername(a, b) {
    return a.login.username.localeCompare(b.login.username);
  }

  function sortUserList(userList, sortBy, sortDirection) {
    const sortFunction =
      sortBy === "fullname" ? compareFullname : compareUsername;
    // create a copy of userList before sorting so we can easily go back to userList in case of no sorting
    const sortedUserList = [...userList];
    return sortedUserList.sort((a, b) => {
      return sortDirection === "ascending"
        ? sortFunction(a, b)
        : sortFunction(b, a);
    });
  }

  const sortedUserList = useMemo(() => {
    if (sortBy !== "Sort By" && sortDirection !== "Sort Direction") {
      return sortUserList(userList, sortBy, sortDirection);
    }
    return userList; // Default to original userList if not sorting
  }, [userList, sortBy, sortDirection]);

  return (
    <div className="container">
      <div className="table-responsive mt-3 mx-auto" id="user-table">
        <table className="table table-bordered table-hover align-middle">
          <thead className="text-center">
            <tr>
              <th>Full Name</th>
              <th>Username</th>
              <th>Thumbnail</th>
            </tr>
          </thead>

          <tbody>
            {!sortedUserList && (
              <tr className="text-center mt-3">
                <td colSpan="12">"Something went wrong!"</td>
              </tr>
            )}

            {sortedUserList && sortedUserList.length === 0 && (
              <tr className="text-center mt-3">
                <td colSpan="12">"No user found"</td>
              </tr>
            )}

            {sortedUserList &&
              sortedUserList.length > 0 &&
              sortedUserList.map((user) => (
                <tr key={user.login.uuid}>
                  <td>
                    {user.name.title + " " + user.name.first + user.name.last}
                  </td>
                  <td>{user.login.username}</td>
                  <td className="d-flex justify-content-center">
                    <img
                      src={user.picture.thumbnail}
                      alt={user.login.username}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
