import './Hero.scss';
import heroImage from '../../../assets/images/hero-img.png';
import versace from '../../../assets/images/logos/versace-logo.svg';
import zara from '../../../assets/images/logos/zara-logo.svg';
import gucci from '../../../assets/images/logos/gucci-logo.svg';
import prada from '../../../assets/images/logos/prada-logo.svg';
import ck from '../../../assets/images/logos/ck-logo.svg';
import Button from '../../button/Button';
import { v4 as id } from "uuid";
import { useNavigate } from 'react-router-dom';

interface IHeroStats {
  quantity: string
  type: string
  id: string
}

const Hero: React.FC = () => {

  const navigateToCategory = useNavigate();

  const stats: IHeroStats[] = [
    {
      quantity: '200+',
      type: 'International Brands',
      id: id()
    },
    {
      quantity: '2,000+',
      type: 'High-Quality Products',
      id: id()
    },
    {
      quantity: '30,000+',
      type: 'Happy Customers',
      id: id()
    }
  ]

  const brands: { name: string; logo: string }[] = [
    { name: 'Versace', logo: versace },
    { name: 'Zara', logo: zara },
    { name: 'Gucci', logo: gucci },
    { name: 'Prada', logo: prada },
    { name: 'CK', logo: ck },
  ];

  const handleShopNow = () => {
    navigateToCategory('/category')
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__info">
            <h1 className="hero__title">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="hero__text">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <Button type="secondary" text="Shop Now" htmlType="button" onClick={handleShopNow}/>
            <ul className="hero__stats">
              {stats.map(item => {
                return (
                  <li className="hero__stats-item" key={item.id}>
                    <div>{item.quantity}</div>
                    <p>{item.type}</p>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="hero__image">
            <img src={heroImage} alt="models" />
          </div>
        </div>
      </div>
      <div className="hero__footer">
        <ul className="hero__brand-list">
          {brands.map(item => {
            return (
              <li key={item.name}>
                <img src={item.logo} alt={item.name} />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Hero;