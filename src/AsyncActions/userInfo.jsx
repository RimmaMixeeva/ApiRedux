import { getUserInfo } from '../store/itemInfoReducer';
export const fetchUserInfo = (id) => {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => dispatch(getUserInfo(json)));
  };
};
