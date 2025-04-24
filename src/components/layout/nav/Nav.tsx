import cartIcon from '../../../assets/images/icons/cart-icon.svg';
import userIcon from '../../../assets/images/icons/user-icon.svg';
import logo from '../../../assets/images/logos/logo.png';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/rtkHooks';

interface INavProps {
  onSubscribeClick: () => void
}

const Nav: React.FC<INavProps> = ({ onSubscribeClick }) => {
  const cartLength = useAppSelector(store => store.cart.length)
  const navItems = [
    {
      title: 'Categorys',
      path: '/category'
    },
    {
      title: 'Cart',
      path: '/cart'
    },
  ];

  return (
    <nav className="header__nav">
      <div>
        <Link to='/'>
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="header__list">
        <li className="header__item" key="shop">Shop</li>
        {navItems.map((item, index) => <li key={item.title + index} className="header__item"><Link to={item.path}>{item.title}</Link></li>)}
        <li className="header__item" onClick={onSubscribeClick} key='subscribe'>Subscribe Now</li>
      </ul>
      <form className="header__search-form" action="">
        <input className="header__input" type="text" placeholder="Search for products..." />
      </form>
      <ul className="header__list">
        <li className="header__item-cart">
          <Link to="/cart/">
            <img src={cartIcon} alt="cart" />
            <span className={`header__item-count ${cartLength > 0 ? 'header__item-count--active' : ''}`}>{cartLength}</span>
          </Link>
        </li>
        <li className="header__item-account">
          <img src={userIcon} alt="authorisation" />
        </li>
      </ul>
    </nav>
  )
}

export default Nav;