import { getAlbumInfo } from '../store/itemInfoReducer';
export const fetchAlbumInfo = (id) => {
  const resultInfo = {
    albumInfo: {},
    photos: [],
  };
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then((r) => r.json())
      .then((album) => (resultInfo.albumInfo = album));

    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((r) => r.json())
      .then((photos) => (resultInfo.photos = photos))
      .then(() => dispatch(getAlbumInfo(resultInfo)));
  };
};
