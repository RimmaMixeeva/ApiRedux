import { useCallback } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { fetchAlbums } from '../AsyncActions/albums';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAlbumInfo } from '../AsyncActions/albumInfo';
export const loader = async () => {
  // const albums = await fetch(
  //   `https://jsonplaceholder.typicode.com/albums`
  // ).then((r) => r.jdispatch(fetchAlbumInfo(id));son());
  // return { albums };
};
function Albums() {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.itemsInfo.albums);
  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  const navigate = useNavigate();
  const goToAlbum = useCallback(
    (id) => {
      return () => navigate(`/albums/${id}`);
    },
    [navigate]
  );
  return (
    <div>
      {albums.map((album) => (
        <div key={album.id} onClick={goToAlbum(album.id)}>
          {album.title}
        </div>
      ))}
    </div>
  );
}

export default Albums;
