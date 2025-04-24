import { useLocation, Link } from "react-router-dom";
import { useAllProducts } from "../../../hooks/useAllProducts";
import { IProduct } from "../../../services/productsApi";
import './BreadCrumbs.scss';

const BreadCrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(item => item);
  const allProducts = useAllProducts();

  const selectedProduct = allProducts?.find((item: IProduct) => String(item.id) === pathnames[1]);

  return (
    <nav className="breadCrumbs">
      <div className="container">
        <ul className="breadCrumbs__list">
          <li>
            <Link to='/'>Home</Link>
          </li>

          {pathnames.map((name, index) => {
            const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
            const isLast = index === pathnames.length - 1;
            let productName: string = '';

            if (isLast && pathnames[0] === 'category' && selectedProduct) {
              productName = selectedProduct.name;
            } else {
              productName = pathnames[0]
            }

            return (
              <li key={routeTo}>
                {isLast ? (
                  <span>{productName}</span>
                ) : (
                  <Link to={routeTo}>{decodeURIComponent(name)}</Link>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default BreadCrumbs;