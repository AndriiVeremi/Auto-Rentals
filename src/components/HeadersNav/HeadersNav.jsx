import { NavLink } from 'react-router-dom';

const HeadersNav = () => {
  return (
    <>
      <div>
        <NavLink to="/">Auto Rentals</NavLink>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
          <li>
            <NavLink to="/">User</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/">LoginIn</NavLink>
          </li>
          <li>
            <NavLink to="/">SingIn</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeadersNav;
