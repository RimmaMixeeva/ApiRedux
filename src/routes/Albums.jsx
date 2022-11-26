import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAlbums } from '../AsyncActions/albums';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
export const loader = async () => {};
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
