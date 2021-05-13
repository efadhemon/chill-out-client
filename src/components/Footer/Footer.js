import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import FooterCol from './FooterCol';

const Footer = () => {

    const explore = [
        { name: "About Online Food", link: "/" },
        { name: "Read Our Blog", link: "/checkup" },
        { name: "Sign up to deliver", link: "/" },
        { name: "Add your restaurant", link: "/" },
    ]

    const others = [
        { name: "Get Help", link: "/" },
        { name: "Read FAQ", link: "/" },
        { name: "View All Cities", link: "/" },
        { name: "Restaurants near me", link: "/" }
    ]

    return (
        <footer className="footer">
            <div className="container">
                <div className="row py-4">
                    <div className="title col-md-6">
                        <h1>Chill Out</h1>
                        <h3 className="text-gray">A Online Restaurant site</h3>
                        <ul className="list-unstyled mt-4">
                            <li><Link to="/" className="text-decoration-none"><FontAwesomeIcon icon={faChevronRight} /> Stay with us</Link></li>
                        </ul>
                    </div>

                    <FooterCol key={1} menuItems={explore} />
                    <FooterCol key={2} menuItems={others} />

                </div>

                <hr className="bg-light" />

                <div className="text-center py-4">
                    <span>Copyright {(new Date()).getFullYear()} All Rights Reserved</span>
                </div>
                
            </div>
        </footer>

    );
};

export default Footer;