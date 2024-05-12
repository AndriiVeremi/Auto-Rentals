import { Outlet } from 'react-router-dom';
import HeadersNav from 'components/HeadersNav/HeadersNav';

const HeaderLayout = () => {
  return (
    <>
      <div><HeadersNav /></div>
      <div><Outlet /></div>
    </>
  );
};

export default HeaderLayout;
