import './Footer.scss';
import logo from '../../../assets/images/logos/logo.png';
import FooterGrid from './footerGrid/FooterGrid';

const Footer: React.FC = () => {

  const handleLogoFooter = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }


  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={logo} alt="logo" onClick={handleLogoFooter} />
            </div>
            <p className="footer__description">
              We have clothes that suits your style and which you’re proud to wear. From women to men.
            </p>
            <nav className="footer__socials">
              <ul className="footer__socials-list">
                <li className="footer__socials-item footer__socials-item--twitter">
                  <a className="footer__social-link footer__social-link--twitter" href="https://x.com/ASOS_news" target="_blank"></a>
                </li>
                <li className="footer__socials-item footer__socials-item--facebook">
                  <a className="footer__social-link footer__social-link--facebook" href="https://www.facebook.com/profile.php?id=100006184030321&locale=fr_FR" target="_blank"></a>
                </li>
                <li className="footer__socials-item footer__socials-item--instagram">
                  <a className="footer__social-link footer__social-link--instagram" href="https://www.instagram.com/fcbarcelona/" target="_blank"></a>
                </li>
                <li className="footer__socials-item ">
                  <a className="footer__social-link footer__social-link--gitHub" href="https://github.com/ArtEugeniu" target="_blank"></a>
                </li>
              </ul>
            </nav>
          </div>

          <FooterGrid />
        </div>
        <div className="footer__bottom">
          <div className="footer__rights">Shop.co © 2000-2023, All Rights Reserved</div>
          <ul className="footer__payment-list">
            <li className="footer__payment-item footer__payment-item--visa"></li>
            <li className="footer__payment-item footer__payment-item--master"></li>
            <li className="footer__payment-item footer__payment-item--payPal"></li>
            <li className="footer__payment-item footer__payment-item--applePay"></li>
            <li className="footer__payment-item footer__payment-item--googlePay"></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;