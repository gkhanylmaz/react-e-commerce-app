import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/product"} element={<Product />} />
        <Route path={"/cart"} element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
