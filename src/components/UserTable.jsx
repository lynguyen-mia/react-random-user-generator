import { useSelector } from "react-redux";

const UserTable = () => {
  const userList = useSelector((state) => state.userList);

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
            {!userList && (
              <tr className="text-center mt-3">
                <td colSpan="12">"Something went wrong!"</td>
              </tr>
            )}

            {userList && userList.length === 0 && (
              <tr className="text-center mt-3">
                <td colSpan="12">"No user found"</td>
              </tr>
            )}

            {userList &&
              userList.length > 0 &&
              userList.map((user) => (
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
