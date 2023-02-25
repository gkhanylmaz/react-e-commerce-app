import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"hakkında"} element={<About />} />
      </Routes>
    </>
  );
}

export default App;
