import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';

export default function Navigation() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <nav>
      <Link to="/contacts">Contacts</Link>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}
