import React, { Component } from 'react';

class Latestnotifications extends Component {

    constructor() {
        super();
        this.state = {
            notifications: [
                { 'type': 'order', 'title': 'New Order', 'description': 'Selena has placed an new order', 'arrived_time': '10 AM' },
                { 'type': 'enquiry', 'title': 'New Enquiry', 'description': 'Phileine has enquired about a product', 'arrived_time': '1 PM' },
                { 'type': 'ticket', 'title': 'New Ticket', 'description': 'New ticket has been assigned to you', 'arrived_time': '2 PM' },
                { 'type': 'order', 'title': 'New Order', 'description': 'Selena has placed an new order', 'arrived_time': '12 AM' },
                { 'type': 'meetup', 'title': 'Company Meetup', 'description': 'You have new meetups today', 'arrived_time': '6 AM' },
                { 'type': 'ticket', 'title': 'Support Ticket', 'description': 'New ticket has been assigned to you', 'arrived_time': '2 AM' },
                { 'type': 'order', 'title': 'New Order', 'description': 'Udaya has placed an new order', 'arrived_time': '8 AM' }
            ],
            showAction: false,

        }
        this.handleAction = this.handleAction.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }
    handleOutsideClick(e) {

        if (this.node) {

            if (this.node.contains(e.target)) {
                this.handleAction();
                return;
            }

        }
        this.handleAction();
    }

    handleAction() {
        if (!this.state.showAction) {
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            showAction: !prevState.showAction
        }));

    }
    render() {

        return (
            <div className="col-xl-4 col-12">

                <div className="card card-default" data-scroll-height="560" style={{ 'height': '560px' }}>
                    <div className="card-header justify-content-between ">
                        <h2>Latest Notifications</h2>
                        <div>
                            <button className="text-black-50 mr-2 font-size-20"><i className="mdi mdi-cached"></i></button>
                            <div className="dropdown show d-inline-block widget-dropdown" ref={node => { this.node = node; }}>
                                <button className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdown-notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" onClick={this.handleAction}></button>
                                {this.state.showAction ?
                                    <ul className="dropdown-menu dropdown-menu-right show" aria-labelledby="dropdown-notification">
                                        <li className="dropdown-item"><a href="#">Action</a></li>
                                        <li className="dropdown-item"><a href="#">Another action</a></li>
                                        <li className="dropdown-item"><a href="#">Something else here</a></li>
                                    </ul> : null
                                }
                            </div>
                        </div>

                    </div>
                    <div className="card-body slim-scroll scroller">
                        {this.state.notifications.map((notify, index) =>
                            <div className="media pb-3 align-items-center justify-content-between" style={{ 'textAlign': 'left' }} key={index}>
                                <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-primary text-white">
                                    <i className={notify.type == "order" ? "mdi mdi-cart-outline font-size-20" : notify.type == "meetup" ? "mdi  mdi-calendar-blank font-size-20" : notify.type == "enquiry" ? "mdi mdi-email-outline font-size-20" : "mdi mdi-stack-exchange font-size-20"}></i>
                                </div>
                                <div className="media-body pr-3 ">
                                    <a className="mt-0 mb-1 font-size-15 text-dark" href="#">{notify.title}</a>
                                    <p >{notify.description}</p>
                                </div>
                                <span className=" font-size-12 d-inline-block"><i className="mdi mdi-clock-outline"></i> {notify.arrived_time}</span>
                            </div>
                        )}



                    </div>
                    <div className="mt-3"></div>
                </div>
            </div>
        );
    }
}

export default Latestnotifications;