import React from 'react';
import ReactDOM from 'react-dom'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Regulamin from './components/Regulamin';
import Footer from './components/Footer';
import LeftMainNav from './components/LeftMainNav';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <h1 style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '2rem' }}>Sklep aktualnie jest wyłączony. Zamówienia prosimy składać mailowo na biuro@ledbecool.pl</h1>

      <div class="row">
        <div class="left-panel ">
          <LeftMainNav />
        </div>

        <div class="col-9">
          <Switch className="right-panel">
            <Route exact path="/" component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route paty="/regulamin" component={Regulamin} />
            <Route component={Default} />
          </Switch>
        </div>
        <Modal />
        <div class="col">
          reklamy
    </div>
      </div>

      <Footer />

    </React.Fragment>
  );
}

export default App;


