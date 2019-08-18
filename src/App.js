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
import Automatyka from './components/ProductGroups/Automatyka';
import Elektronika from './components/ProductGroups/Elektronika';
import Rekodziela from './components/ProductGroups/Rekodziela';
import Uslugi from './components/ProductGroups/Uslugi';
import Onas from './components/Onas';
import WarzywaOwoce from './components/ProductGroups/WarzywaOwoce';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <h1 style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '2rem' }}>Sklep aktualnie jest wyłączony. Zamówienia prosimy składać mailowo na biuro@ledbecool.pl</h1>

      <div class="row">
        <div class="left-panel col-xs-12  ">
          <LeftMainNav />
        </div>

        <div class="col-xl-9 col-md-8 col-xs-12 ">
          <Switch className="right-panel">
            <Route exact path="/" component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/onas" component={Onas} />
            <Route path="/cart" component={Cart} />
            <Route path="/regulamin" component={Regulamin} />
            <Route path="/automatyka" component={Automatyka} />
            <Route path="/rekodziela" component={Rekodziela} />
            <Route path="/uslugi" component={Uslugi} />
            <Route path="/warzywa-owoce" component={WarzywaOwoce} />
            <Route path="/elektronika" component={Elektronika} />

            <Route component={Default} />
          </Switch>
        </div>
        <Modal />
        {/* <div class="col">
          reklamy
    </div> */}
      </div>

      {/* <Footer /> */}

    </React.Fragment>
  );
}

export default App;


