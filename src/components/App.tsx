import "../App.css";
// import { Route, Routes } from 'react-router-dom';
// import Header from "./Header";
// import Footer from "./Footer";
import Home from './navigations/Home';
import About from './navigations/About';
import Contact from './navigations/Contact';
import Navbar from "./Navbar";


function App() {
  let component = <App />;
  switch (window.location.pathname) {
    case '/':
      component = <Home/>;
      break;
    case '/about':
      component = <About/>;
      break;
    case '/contact':
      component = <Contact/>;
      break;
  }
  return (
    <>
      <Navbar />
      <div className="container">
      {component}
      </div>
    </>
  );
}

export default App;
