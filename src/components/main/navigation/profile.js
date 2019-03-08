import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            'showProfile': false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    handleOutsideClick(e) {

        if (this.node) {

            if (this.node.contains(e.target)) {
                this.handleClick();
                return;
            }

        }
        this.handleClick();
    }

    handleClick() {

        if (!this.state.showProfile) {
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            showProfile: !prevState.showProfile
        }));
    }
    render() {

        return (
            <div className="dropdown user-menu show" ref={node => { this.node = node; }}>
                <button className="dropdown-toggle nav-link" onClick={this.handleClick}>
                    <img src="assets/img/user/user.png" className="user-image" alt="User avatar" />
                    <span className="d-none d-lg-inline-block">Abdus Salam</span>
                </button>
                <ul className={this.state.showProfile ? "dropdown-menu dropdown-menu-right show" : "dropdown-menu dropdown-menu-right"}>

                    <li className="dropdown-header">
                        <img src="assets/img/user/user.png" className="img-circle" alt="User avatar" />
                        <div className="d-inline-block">
                            Abdus Salam <small className="pt-1">abdus@gmail.com</small>
                        </div>
                    </li>

                    <li>
                        <Link to="/profile">
                            <i className="mdi mdi-account"></i> My Profile
                        </Link>
                    </li>
                    <li>
                        <a href="email-inbox.html">
                            <i className="mdi mdi-email"></i> Message
                        </a>
                    </li>
                    <li>
                        <a href="#"> <i className="mdi mdi-diamond-stone"></i> Projects </a>
                    </li>
                    <li>
                        <a href="#"> <i className="mdi mdi-settings"></i> Account Setting </a>
                    </li>

                    <li className="dropdown-footer">
                        <a href="signin.html"> <i className="mdi mdi-logout"></i> Log Out </a>
                    </li>
                </ul>
            </div>
        );
    }
}



export default Profile;