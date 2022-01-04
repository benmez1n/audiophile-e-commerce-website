import {
  BrowserRouter as Router,
  Switch, 
  Route
 } from "react-router-dom";
import { useEffect } from "react";

import { AppProvider } from "./helpers/context";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Alert from "./components/Alert";

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout"

import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Alert/>
          <Navbar/>
          <Cart />
          <Switch>
            <Route exact path="/" >
              <Home/>
            </Route>
            <Route exact path="/checkout" children={<Checkout/>}/>
            <Route exact path="/:category" children={<CategoryPage/>} /> 
            <Route exact path="/:category/:productId" children={<ProductPage/>} /> 
          </Switch>
          <Footer/>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
