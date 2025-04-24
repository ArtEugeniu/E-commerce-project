import './StyleCard.scss';
import { Link } from 'react-router-dom';

interface IStyleCardProps {
  styleData: {
    title: string
    image: string
    id: number
  }
}

const StyleCard: React.FC<IStyleCardProps> = ({ styleData }) => {


  return (
    <>
      <li className="styleCard">
        <h3 className="styleCard__title">{styleData.title}</h3>
        <div className="styleCard__img">
          <Link to={`/category?category=${styleData.title}`}>
            <img src={`https://${styleData.image}`} alt="" />
          </Link>
        </div>
      </li>
    </>
  )
}

export default StyleCard;