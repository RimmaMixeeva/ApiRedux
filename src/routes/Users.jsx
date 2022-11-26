import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../AsyncActions/users';
export const loader = async () => {};

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.itemsInfo.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const navigate = useNavigate();
  const goToUser = useCallback(
    (id) => {
      return () => navigate(`/users/${id}`);
    },
    [navigate]
  );
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} onClick={goToUser(user.id)}>
          {user.name}
        </div>
      ))}
    </div>
  );
}
export default Users;
