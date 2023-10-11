import { createBrowserRouter } from 'react-router-dom';
import { NotFound } from '../components/NotFound';
import { Login } from '../pages/components/Login';
import { Register } from '../pages/components/Register';
import LayoutPublic from '../pages/LayoutPublic';
import { RegisterCompany } from '../pages/components/RegisterCompany';
import { AuthProvider } from '../context/AuthContext';
import LayoutPrivate from '../private/LayoutPrivate';
import { Balance } from '../components/Balance';

const RouterMain = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthProvider>
        <LayoutPublic />
      </AuthProvider>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: '/user/register',
        element: <Register />,
      },
      {
        path: '/company/register',
        element: <RegisterCompany />,
      },
    ],
  },
  {
    path: '/user/*',
    element: (
      <AuthProvider>
        <LayoutPrivate />
      </AuthProvider>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Balance />,
      },
      {
        path: 'account',
        element: <Balance />,
      },
      {
        path: 'transaction',
        element: <Balance />,
      },
    ],
  },
]);

export default RouterMain;
