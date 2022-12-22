import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div>
      <h3>AuthLayout</h3>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
