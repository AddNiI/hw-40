import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/auth/authOperations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user?.email);

  return (
    <div>
      <p>{email}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
