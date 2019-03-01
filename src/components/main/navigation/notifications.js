import React, { Component } from 'react';


class Notifications extends Component {

    constructor() {
        super();
        this.state = {
            notifications: [
                { 'message': 'New user registered', 'icon': 'mdi mdi-account-plus', 'time': '10 AM' },
                { 'message': 'User deleted', 'icon': 'mdi mdi-account-remove', 'time': ' 07 AM' },
                { 'message': 'Sales report is ready', 'icon': 'mdi mdi-chart-areaspline', 'time': '07 AM' },
                { 'message': 'New client', 'icon': 'mdi mdi-account-supervisor', 'time': '10 AM' },
                { 'message': 'Server overloaded', 'icon': 'mdi mdi-server-network-off', 'time': '07 AM' }
            ],
            'showNotification': false
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

        if (!this.state.showNotification) {
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            showNotification: !prevState.showNotification
        }));
    }

    render() {

        return (


            <div className="dropdown notifications-menu show" ref={node => { this.node = node; }}>
                <div >
                    <button className="dropdown-toggle" onClick={this.handleClick}>
                        <i className="mdi mdi-bell-outline" ></i>
                    </button>
                    {this.state.showNotification ?
                        <ul className="dropdown-menu dropdown-menu-right show" >
                            <li className="dropdown-header">You have 5 notifications</li>
                            {this.state.notifications.map((notify, index) =>
                                <li key={index}>
                                    <a href="#">
                                        <i className={notify.icon}></i> {notify.message}
                                        <span className=" font-size-12 d-inline-block float-right"><i className="mdi mdi-clock-outline"></i> {notify.time}</span>
                                    </a>
                                </li>
                            )}


                            <li className="dropdown-footer">
                                <a className="text-center" href="#"> View All </a>
                            </li>
                        </ul> : null}
                </div>
            </div>

        );
    }
}


export default Notifications;