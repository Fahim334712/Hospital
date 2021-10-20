import React from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css';


const Header = () => {

    return (
        <div className="flexi" style={{ backgroundImage: `url("https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-medical-medical-doctor-science-gradient-background-image_63443.jpg")` }}>
            <div className="flexid container">
                <div>
                    <img className="img-Size" src="./images/img-1.png" alt="" />
                </div>

                <div className="flexis ">

                    <LinkContainer to="/home">
                        <Nav.Link className="colorr">Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link className="colorr">About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/departments">
                        <Nav.Link className="colorr">Departments</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/doctors">
                        <Nav.Link className="colorr">Doctors</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/services">
                        <Nav.Link className="colorr">Services</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/login">
                        <Nav.Link className="colorr"><i className="fa fa-sign-in" aria-hidden="true"></i></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/register">
                        <Nav.Link className="colorr"><i className="fas fa-user-plus"></i></Nav.Link>
                    </LinkContainer>
                    <Nav.Link className="colorr"> <i className="fas fa-sign-out-alt"></i>
                    </Nav.Link>



                </div>
            </div>
            <div className=" ngb">
                <div className="secondPartHeader">
                    <div><small ><i className="fas fa-envelope-square"></i> evergreen.care@gmail.com</small></div>
                    <div><small> <i className="fas fa-phone"></i>+00876533</small></div>
                    <div className="containers">
                        <i className="fab fa-facebook lk"></i> &nbsp;&nbsp;&nbsp;
                        <i className="fab fa-linkedin-in lk"></i>&nbsp;&nbsp;&nbsp;
                        <i className="fab fa-twitter-square lk"></i>&nbsp;&nbsp;&nbsp;
                        <i className="fab fa-instagram lk"></i>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Header;