import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../AsyncActions/users';
import { useEffect } from 'react';
export const loader = async () => {};
// await fetch('https://jsonplaceholder.typicode.com/users').then((r) =>
//   r.json()
// );
// setTimeout(() => {
//   console.log('Delayed for 1 second.');
// }, '1000');
//};
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
