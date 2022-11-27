import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbumInfo } from '../AsyncActions/albumInfo';
import { useEffect } from 'react';
import { fetchUsers } from '../AsyncActions/users';
import Page404 from './Page404';
export const loader = async () => {};
function Album() {
  const dispatch = useDispatch();
  const album = useSelector((state) => state.itemInfo.albumInfo);
  const photos = useSelector((state) => state.itemInfo.photos);
  const user = useSelector((state) => state.itemsInfo.users).filter(
    (item) => item.id == album.userId
  );
  useEffect(() => {
    const id = document.URL.replace(
      `http://${window.location.host}/albums/`,
      ''
    );
    dispatch(fetchAlbumInfo(id));
    dispatch(fetchUsers());
  }, [dispatch]);
  if (
    parseInt(window.location.pathname.replace('/albums/', '')) < 1 ||
    parseInt(window.location.pathname.replace('/albums/', '')) > 100
  )
    return <Page404 />;
  else if (!photos[0] || !album || !user[0]) return <div>Loading...</div>;

  return (
    <div>
      <div>Title: {album.title}</div>
      <div>Owner: {user[0].name}</div>
      <br />
      <span>PHOTOS</span>
      <div className="photos">
        {photos[0]
          .filter((item) => item.albumId === album.id)
          .map((item) => (
            <div>
              <img src={item.url} key={item.id} alt="Loading..." />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Album;
