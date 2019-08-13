import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav
} from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../logoeforylogo.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import Regulamin from './Regulamin';
import { FaAlignRight } from 'react-icons/fa';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="sticky-top navbar-dark indigo" >
                <Navbar color="dark" dark expand="md" >

                    <Link to='/'>
                        <img src={logo} alt="store" className="navbar-brand" style={{ height: '100px' }} />
                    </Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <Link to="/" className="nav-link">
                                produkty
                                    </Link>
                            <Link to="/" className="nav-link">
                                o nas
                                        </Link>
                            <Link to="/Regulamin" className="nav-link">
                                regulamin
                                </Link>
                        </Nav>
                    </Collapse>

                    <Link to='/cart' className="ml-auto" >
                        <ButtonContainer style={{ float: 'right', fontSize: '0.9rem' }}>
                            <span className="mr-0 ">
                                <i className="fas fa-cart-plus "> koszyk </i>
                            </span>
                        </ButtonContainer>

                    </Link>

                </Navbar>


            </div >
        );
    }
}
