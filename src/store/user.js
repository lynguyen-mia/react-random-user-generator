import { createStore } from "redux";

const initialState = {
  userList: [],
  curPage: 1,
  totalPage: 10,
  userPerPage: 10,
  sortBy: "fullname",
  sortDirection: "ascending"
};

const userReducer = (state = initialState, action) => {
  if (action.type === "FETCH_USERS") {
    return { ...state, userList: action.userList };
  }
  if (action.type === "CHANGE_PAGE") {
    return { ...state, curPage: action.curPage };
  }
  if (action.type === "SORT_BY") {
    return { ...state, sortBy: action.sortBy };
  }
  if (action.type === "SORT_DIRECTION") {
    return { ...state, sortDirection: action.sortDirection };
  }
  return state;
};

const store = createStore(userReducer);

export default store;
