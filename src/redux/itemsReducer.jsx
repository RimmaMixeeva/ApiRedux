const GET_ALL_USERS = 'GET_ALL_USERS';
const GET_ALL_ALBUMS = 'GET_ALL_ALBUMS';

const defaultState = {
  albums: [],
  users: [],
};
export const itemsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: [...action.payload] };
    case GET_ALL_ALBUMS:
      return { ...state, albums: [...action.payload] };
    default:
      return state;
  }
};
export const getUsers = (payload) => ({ type: GET_ALL_USERS, payload });
export const getAlbums = (payload) => ({ type: GET_ALL_ALBUMS, payload });
