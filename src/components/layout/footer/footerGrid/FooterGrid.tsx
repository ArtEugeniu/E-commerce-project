import './FooterGrid.scss';

const FooterGrid: React.FC = () => {

  return (
    <div className="footer-grid">
      <div className="footer-column">
        <h4 className="footer-column__title">Company</h4>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Press</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4 className="footer-column__title">Help</h4>
        <ul>
          <li><a href="#">Support</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Shipping</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4 className="footer-column__title">Shop</h4>
        <ul>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">Men Gym</a></li>
          <li><a href="#">Women Gym</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4 className="footer-column__title">Legal</h4>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Cookie Policy</a></li>
          <li><a href="#">Licenses</a></li>
        </ul>
      </div>
    </div>
  )
}

export default FooterGrid;