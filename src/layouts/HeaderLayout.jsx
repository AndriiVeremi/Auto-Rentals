import { Outlet } from 'react-router-dom';
import HeadersNav from 'components/HeaderNav/HeaderNav';

const HeaderLayout = () => {
  return (
    <>
      <div><HeadersNav /></div>
      <div><Outlet /></div>
    </>
  );
};

export default HeaderLayout;
