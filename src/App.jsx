import Header from "./components/Header";
import Featured from "./components/Featured";
import TopSelling from "./components/TopSelling";
import Footer from "./components/Footer";
import Products from "./components/pages/Products";
import Detail from "./components/pages/Detail";
import Cart from "./components/pages/Cart";
import Alert from "./components/Alert";
import Checkout from "./components/pages/Checkout";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import ThankYou from "./components/pages/ThankYou";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EcomProvider } from "./context/EcomContext";

function App() {
  return (
    <EcomProvider>
      <Router>
        <Header />
        <Alert />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Featured />
                <TopSelling />
              </>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <Footer />
      </Router>
    </EcomProvider>
  );
}

export default App;
