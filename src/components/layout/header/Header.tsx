import './Header.scss';
import Nav from '../nav/Nav';

const Header: React.FC = () => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Header;