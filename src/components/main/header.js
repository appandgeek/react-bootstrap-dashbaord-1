import React, { Component } from 'react';
import Searchbar from './navigation/searchbar';
import Notifications from './navigation/notifications';
import Profile from './navigation/profile';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            showSidebar: false
        }
        this.handleSidebar = this.handleSidebar.bind(this);
    }

    handleSidebar() {
        if (this.state.showSidebar) {
            document.body.classList.remove('sidebar-minified');
            this.setState({
                showSidebar: !this.state.showSidebar
            })
        }
        else {
            document.body.classList.add('sidebar-minified');
            this.setState({
                showSidebar: !this.state.showSidebar
            })
        }



    }

    render() {

        return (
            <header className="main-header " id="header">
                <nav className="navbar navbar-static-top navbar-expand-lg">

                    <button id="sidebar-toggler" className="sidebar-toggle" onClick={this.handleSidebar} onTouchMove={this.handleSidebar}>
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