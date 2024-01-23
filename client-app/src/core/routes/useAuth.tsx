import { getCurrentUser } from 'core/selectors/selectors';
import { useAppSelector } from 'core/store/store';

const useAuth = () => {
  const currentUser = useAppSelector(getCurrentUser);
  const { userName } = currentUser;

  if (userName) return true;

  return false;
};

export default useAuth;
