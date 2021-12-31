import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";

import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Link
 } from "react-router-dom";
import ProductsMainPage from "./pages/ProductsMainPage";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/:category" children={<ProductsMainPage/>}/> 
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
