import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ component: Component, redirectTo = '/login' }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
}
