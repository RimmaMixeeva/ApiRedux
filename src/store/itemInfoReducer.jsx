const GET_USER_INFO = 'GET_USER_INFO';
const GET_ALBUM_INFO = 'GET_ALBUM_INFO';

const defaultState = {
  albumInfo: {},
  photos: [],
  userInfo: {},
  albums: [],
};
export const itemInfoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload.userInfo,
        albums: [action.payload.albums],
      };
    case GET_ALBUM_INFO:
      return {
        ...state,
        albumInfo: action.payload.albumInfo,
        photos: [action.payload.photos],
      };
    default:
      return state;
  }
};
export const getUserInfo = (payload) => ({ type: GET_USER_INFO, payload });
export const getAlbumInfo = (payload) => ({ type: GET_ALBUM_INFO, payload });
