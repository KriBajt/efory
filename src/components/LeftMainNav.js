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
                        <i class="far fa-lightbulb" style={{ marginRight: '1.3rem' }}></i>
                        <span>Oświetlenie</span>
                    </Link>
                    <Link to="/automatyka" className="nav-link-left"><i class="fas fa-broadcast-tower" style={{ marginRight: '.8rem' }}></i>

                        <span>Automatyka</span>
                    </Link>
                    <Link to="/elektronika" className="nav-link-left"><i class="fas fa-bolt" style={{ marginRight: '1.3rem' }}></i>
                        <span>Elektronika</span>
                    </Link>
                    <Link to="/rekodziela" className="nav-link-left"><i class="fas fa-pencil-ruler" style={{ marginRight: '.8rem' }}></i>
                        <span> Rękodzieła</span>
                    </Link>
                    <Link to="/uslugi" className="nav-link-left"><i class="fas fa-laptop-code" style={{ marginRight: '.7rem' }}></i>
                        <span>   Usługi</span>
                    </Link>
                    <Link to="/warzywa-owoce" className="nav-link-left"><i class="fas fa-carrot" style={{ marginRight: '1.1rem' }}></i>
                        <span>Warzywa/Owoce</span>
                    </Link>
                </Nav>
            </>
        )
    }
}
