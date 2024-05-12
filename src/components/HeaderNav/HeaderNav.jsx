import { NavLink } from 'react-router-dom';
import css from './HeaderNav.module.css';

const HeadersNav = () => {
  return (
    <div className={css.headerWrapper}>
      <div className={css.logoWrapper}>
        <NavLink to="/">Auto Rentals</NavLink>
      </div>
      <div>
        <ul className={css.menuList}>
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
            <NavLink to="/">Add cars</NavLink>
          </li>
        </ul>
      </div>
      <div className={css.loginWrapper}>
        <ul className={css.loginList}>
          <li>
            <NavLink to="/">Login In</NavLink>
          </li>
          <li>
            <NavLink to="/">Sing In</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeadersNav;
