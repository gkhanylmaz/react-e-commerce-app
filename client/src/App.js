import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/product"} element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
