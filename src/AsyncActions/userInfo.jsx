import { getUserInfo } from '../redux/itemInfoReducer';
export const fetchUserInfo = (id) => {
  const resultInfo = {
    userInfo: {},
    albums: [],
  };
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((r) => r.json())
      .then((user) => (resultInfo.userInfo = user))
      .then(() =>
        fetch(`https://jsonplaceholder.typicode.com/albums`)
          .then((r) => r.json())
          .then(
            (albums) =>
              (resultInfo.albums = albums.filter((a) => a.userId == id))
          )
          .then(() => dispatch(getUserInfo(resultInfo)))
      );
  };
};
