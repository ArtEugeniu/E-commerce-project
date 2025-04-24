import cartIcon from '../../../assets/images/icons/cart-icon.svg';
import userIcon from '../../../assets/images/icons/user-icon.svg';
import logo from '../../../assets/images/logos/logo.png';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {

  const navItems = ['Shop', 'On Sale', 'New Arrivals', 'Brands'];

  return (
    <nav className="header__nav">
      <div>
        <Link to='/'>
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="header__list">
        {navItems.map((item, index) => <li key={item + index} className="header__item"><Link to="/">{item}</Link></li>)}
      </ul>
      <form className="header__search-form" action="">
        <input className="header__input" type="text" placeholder="Search for products..." />
      </form>
      <ul className="header__list">
        <li>
          <Link to="/cart/">
            <img src={cartIcon} alt="cart" />
          </Link>
        </li>
        <li>
          <img src={userIcon} alt="authorisation" />
        </li>
      </ul>
    </nav>
  )
}

export default Nav;