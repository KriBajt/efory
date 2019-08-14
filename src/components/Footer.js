import React, { Component } from 'react'
import StickyFooter from 'react-sticky-footer';
import logo from '../logoeforylogo.png';

export default class Footer extends Component {
    render() {
        return (
            <>
            <StickyFooter className="navbar-fixed-bottom"
    bottomThreshold={50}
    normalStyles={{
    backgroundColor: "#ffffff",
    padding: "0.5rem"
    }}
    stickyStyles={{
    backgroundColor: "rgba(255,255,255,.8)",
    padding: "0.5rem",
    clear: "both",
    position: "fixed",
    bottom: "0"
    }}
>
{/* <img src={logo} alt="store" className="navbar-brand" style={{ height: '40px' }} /> */}
<span>Kontakt: biuro@efory.pl</span>

</StickyFooter>
            </>
        )
    }
}
