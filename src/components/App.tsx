import "../App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./navigations/Home";
import About from "./navigations/About";
import Contact from "./navigations/Contact";
import Header from "./Header";
import Items from "./navigations/Items";
import Cart from "./navigations/Cart";
import Menu from "./Menu";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route
            path="/cart"
            element={
              <Cart 
              data={
                { id: 1, price: 2, name: "q", quantity: 2 }
              }/>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
