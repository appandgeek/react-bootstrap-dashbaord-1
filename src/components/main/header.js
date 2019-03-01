import React, { Component } from 'react';
import Searchbar from './navigation/searchbar';
import Notifications from './navigation/notifications';
import Profile from './navigation/profile';

class Header extends Component {

    render() {

        return (
            <header className="main-header " id="header">
                <nav className="navbar navbar-static-top navbar-expand-lg">

                    <button id="sidebar-toggler" className="sidebar-toggle">
                        <span className="sr-only">Toggle navigation</span>
                    </button>

                    <Searchbar />

                    <div className="navbar-right ">
                        <div className="nav navbar-nav" >
                            <Notifications />

                            <Profile />
                        </div>

                    </div>
                </nav>

            </header>
        );
    }
}
export default Header;