import './Header.scss';
import Nav from '../nav/Nav';
import { useState, useRef, useEffect } from 'react';
import { useAllProducts } from '../../../hooks/useAllProducts';
import { useNavigateToProduct } from '../../../hooks/useNavigateToProduct';

interface IHeaderProps {
  onSubscribeClick: () => void
  onLogClick: () => void
}

const Header: React.FC<IHeaderProps> = ({ onSubscribeClick, onLogClick }) => {

  const [search, setSearch] = useState<string>('');
  const [openAuth, setOpenAuth] = useState<boolean>(false);
  const authDiv = useRef<HTMLDivElement | null>(null);
  const allProducts = useAllProducts();
  const navigate = useNavigateToProduct();

  const foundProducts = allProducts.filter(item => {
    if (search !== '') {
      return item.name.toLowerCase().includes(search)
    }
  })

  const handleDeleteSearch = () => {
    setSearch('');
  }

  const handleAccountButton = () => {
    setOpenAuth(prev => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (authDiv.current && !authDiv.current.contains(event.target as Node)) {
        setOpenAuth(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">

          <Nav
            onSubscribeClick={onSubscribeClick}
            search={search} setSearch={setSearch}
            onSearchDelete={handleDeleteSearch}
            onToggleAuth={handleAccountButton}
          />

          <div className={`header__search-result ${search === '' ? '' : 'header__search-result--open'}`}>
            <ul className="header__search-list">
              {foundProducts.length !== 0 ? foundProducts.map(item => {
                return (
                  <li key={item.id} >
                    <button className="header__search-item" onClick={() => navigate(item.id)}>
                      <img src={`https://${item.imageUrl}`} alt="product image" />
                      <p>{item.name}</p>
                    </button>
                  </li>
                )
              }) : <li>Products not found</li>}
            </ul>
          </div>
          <div className={`header__sign-buttons ${openAuth ? 'header__sign-buttons--open' : ''}`} ref={authDiv}>
            <ul className="header__sign-list">
              <li className="header__sign-item">
                <button className="header__log-button" onClick={onLogClick}>Log In</button>
              </li>
              <li className="header__sign-item">
                <button className="header__log-button" onClick={onLogClick}>Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;