import {
  BrowserRouter as Router,
  Switch, 
  Route
 } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";

import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const toTop = () => {
    window.scrollTo({
      top:0,
      behavior : "smooth"
    })
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <Router>
      <div className="App">
        <Navbar toTop={toTop}/>
        <Switch>
          <Route exact path="/" >
            <Home toTop={toTop}/>
          </Route>
          <Route exact path="/:category" children={<CategoryPage toTop={toTop}/>} /> 
          <Route path="/:category/:productId" children={<ProductPage toTop={toTop}/>} /> 
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
