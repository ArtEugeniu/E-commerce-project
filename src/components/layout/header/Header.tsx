import './Header.scss';
import Nav from '../nav/Nav';

interface IHeaderProps {
  onSubscribeClick: () => void
}

const Header: React.FC<IHeaderProps> = ({ onSubscribeClick }) => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">

          <Nav onSubscribeClick={onSubscribeClick}/>
        </div>
      </div>
    </header>
  )
}

export default Header;