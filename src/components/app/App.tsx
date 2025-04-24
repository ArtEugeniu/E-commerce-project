import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import ProductPage from "../../pages/productPage/ProductPage";
import CategoryPage from "../../pages/categoryPage/CategoryPage";
import CartPage from "../../pages/cartPage/CartPage";
import { SortProvider } from "../../context/sortContext";


function App() {


  return (
    <SortProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:id" element={<ProductPage />} />
        <Route path="category/" element={<CategoryPage />} />
        <Route path="cart/" element={<CartPage />} />
      </Routes>
    </SortProvider>
  )
}

export default App;
