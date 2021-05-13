import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AvatarFace from '../../images/Avatar face.png';

const Header = (props) => {

    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};

    const showUserInfo = () => {
        const userInfo = document.getElementById('loggedIn-user-info');
        userInfo.classList.toggle('display-none');
    }

    const signOut = () => {
        sessionStorage.removeItem('loggedInUser')
        sessionStorage.removeItem('admin')
        document.getElementById('loggedIn-user-info').style.display = 'none';
        window.location.reload();
    }

    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand brand-logo" >Chill Out</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item mr-lg-5">
                                <Link to="/checkout" className={props.cart.length !== 0 ? 'nav-link cart cart-added' : 'nav-link cart'}><FontAwesomeIcon icon={faCartArrowDown} /> <span>{props.cart.length}</span></Link>
                            </li>
                            <li className="nav-item">
                                {
                                    loggedInUser.email ?
                                        <img onClick={showUserInfo} className="nav-link user-avatar" src={loggedInUser.photo ? loggedInUser.photo : AvatarFace} alt="Avatar" />
                                        :
                                        <Link className="nav-link login-btn" to="/login">Login</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div id="loggedIn-user-info" className="display-none">
                <img src={loggedInUser.photo ? loggedInUser.photo : AvatarFace} alt="" />
                <h3>{loggedInUser.name}</h3>
                <p>{loggedInUser.email}</p>
                <button className="btn-brand" onClick={signOut}>Log Out</button>
            </div>

        </header>
    );
};

export default Header;