import { useCallback } from 'react';
import Page404 from './Page404';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserInfo } from '../AsyncActions/userInfo';
import { useEffect } from 'react';
export const loader = async () => {};

function User() {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.itemInfo.albums);
  const user = useSelector((state) => state.itemInfo.userInfo);

  useEffect(() => {
    const id = document.URL.replace(
      `http://${window.location.host}/users/`,
      ''
    );
    dispatch(fetchUserInfo(id));
  }, [dispatch]);

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const navigate = useNavigate();
  const goToAlbum = useCallback(
    (id) => {
      return () => navigate(`/albums/${id}`);
    },
    [navigate]
  );
  if (!array.includes(Number(window.location.pathname.replace('/users/', ''))))
    return <Page404 />;
  if (!albums[0] || !user) return <div>Loading...</div>;

  return (
    <div>
      <div>Name: {user.name}</div>
      <div>Username: {user.username}</div>
      <div>Email: {user.email}</div>
      <div>АЛЬБОМЫ:</div>
      {albums[0].map((item) => (
        <div key={item.id} onClick={goToAlbum(item.id)}>
          {item.title}
        </div>
      ))}
    </div>
  );
}

export default User;
