import { useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbumInfo } from '../AsyncActions/albumInfo';
import { useCallback, useEffect } from 'react';
import Page404 from './Page404';
export const loader = async () => {};
function Album() {
  let id = document.URL.replace(`http://${window.location.host}/albums/`, '');

  const dispatch = useDispatch();
  const album = useSelector((state) => state.itemInfo.albumInfo);
  const photos = useSelector((state) => state.itemInfo.photos);
  const users = useSelector((state) => state.itemsInfo.users);

  useEffect(() => {
    dispatch(fetchAlbumInfo(id));
  }, [dispatch, id]);

  console.log(users);
  let user = users.filter((item) => item.id === album.userId);
  if (!photos || !album || !users) return <div>Loading...</div>;
  //if (user[0] === undefined) return <Page404 />;
  if (user[0] === undefined) return <div>Loading...</div>;

  return (
    <div>
      <div>Title: {album.title}</div>
      <div>Owner: {user.name}</div>
      <br />
      <span>PHOTOS</span>
      <div className="photos">
        {photos
          .filter((item) => item.albumId === album.id)
          .map((item) => (
            <div>
              <img src={item.url} alt="Loading..." />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Album;
