import Albums, { loader as albumsLoader } from './routes/Albums';
import Album, { loader as albumLoader } from './routes/Album';
import Users, { loader as usersLoader } from './routes/Users';
import User, { loader as userLoader } from './routes/User';
import Page404 from './routes/Page404';
import Layout from './routes/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './AsyncActions/users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/albums',
        loader: albumsLoader,
        element: <Albums />,
      },
      {
        path: '/users',
        loader: usersLoader,
        element: <Users />,
      },
      {
        path: '/users/:id',
        loader: userLoader,
        element: <User />,
      },
      {
        path: '/albums/:id',
        loader: albumLoader,
        element: <Album />,
      },
    ],
  },
  {
    path: '*',
    element: <Page404 />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
