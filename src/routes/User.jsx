import { useCallback } from 'react';
import Page404 from './Page404';
import { useLoaderData, useNavigate } from 'react-router-dom';
export const loader = async ({ params: { id } }) => {
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((r) => r.json());

  const albums = await fetch(`https://jsonplaceholder.typicode.com/albums`)
    .then((response) => response.json())
    .then((albums) => albums.filter((a) => a.userId === id));
  return { user, albums };
};

function User() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { user, albums } = useLoaderData();
  const navigate = useNavigate();
  const goToAlbum = useCallback((id) => {
    return () => navigate(`/albums/${id}`);
  }, []);
  if (!array.includes(Number(window.location.pathname.replace('/users/', ''))))
    return <Page404 />;

  return (
    <div>
      <div>Name: {user.name}</div>
      <div>Username: {user.username}</div>
      <div>Email: {user.email}</div>
      <div>АЛЬБОМЫ:</div>
      {albums.map((item) => (
        <div key={item.id} onClick={goToAlbum(item.id)}>
          {item.title}
        </div>
      ))}
    </div>
  );
}

export default User;
