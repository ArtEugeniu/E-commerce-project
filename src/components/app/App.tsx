import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import ProductPage from "../../pages/productPage/ProductPage";
import CategoryPage from "../../pages/categoryPage/CategoryPage";
import CartPage from "../../pages/cartPage/CartPage";
import { SortProvider } from "../../context/sortContext";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import { useAppDispatch } from "../../hooks/rtkHooks";
import { setUser, clearUser } from "../../store/authSlice";
import { auth } from "../../services/firebaseConfig";
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ uid: user.uid, email: user.email }));
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <SortProvider>
      <ScrollToTop />
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
