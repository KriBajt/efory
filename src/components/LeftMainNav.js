import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class LeftMainNav extends Component {
    render() {
        return (
            <>
                <Nav className="ml-auto" navbar>
                    <Link to="/" className="nav-link-left">
                        Oświetlenie
                                    </Link>
                    <Link to="/" className="nav-link-left">
                        Automatyka
                                        </Link>
                    <Link to="/Regulamin" className="nav-link-left">
                        Elektronika
                                </Link>
                    <Link to="/Regulamin" className="nav-link-left">
                        Rękodzieła
                                </Link>
                    <Link to="/Regulamin" className="nav-link-left">
                        Rękodzieła
                                </Link>
                </Nav>
            </>
        )
    }
}
