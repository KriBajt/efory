import React from 'react'
import { Link } from 'react-router-dom';

export default function CartTotals({ value }) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
                                type="button" onClick={() => clearCart()}>
                                wyczyść kosz
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                razem :
                            </span>
                            <strong>{cartSubTotal} PLN</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                VAT :
                            </span>
                            <strong> {cartTax} PLN</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                Suma :
                            </span>
                            <strong>{cartTotal} PLN</strong>
                        </h5>
                    </div>
                </div>
            </div>


        </React.Fragment>
    );
}


