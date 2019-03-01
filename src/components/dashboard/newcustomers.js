import React, { Component } from 'react';

class Newcustomer extends Component {

    constructor() {

        super();
        this.state = {
            customers: [
                { 'name': 'Salen Wagner', 'email': '@salena.io', 'ordered_units': 2, 'order_cost': 250, 'avatar': 'assets/img/user/u1.jpg' },
                { 'name': 'Walter Reuter', 'email': '@reuter.io', 'ordered_units': 1, 'order_cost': 150, 'avatar': 'assets/img/user/u2.jpg' },
                { 'name': 'Laressia gaberth', 'email': 'laressa@gmail.com', 'ordered_units': 4, 'order_cost': 450, 'avatar': 'assets/img/user/u3.jpg' },
                { 'name': 'Alberth Wagner', 'email': '@albert.in', 'ordered_units': 2, 'order_cost': 350, 'avatar': 'assets/img/user/u4.jpg' },
                { 'name': 'Leopold Ebert', 'email': '@leopole.me', 'ordered_units': 5, 'order_cost': 950, 'avatar': 'assets/img/user/u5.jpg' }
            ],
            showAction: false
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
            <div className="col-xl-5">
                <div className="card card-table-border-none" data-scroll-height="580">
                    <div className="card-header justify-content-between ">
                        <h2>New Customers</h2>
                        <div>
                            <button className="text-black-50 mr-2 font-size-20">
                                <i className="mdi mdi-cached"></i>
                            </button>
                            <div className="dropdown show d-inline-block widget-dropdown">
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
                    <div className="card-body pt-0">
                        <table className="table ">
                            <tbody>
                                {this.state.customers.map((custom, index) =>
                                    <tr key={index}>
                                        <td >
                                            <div className="media">
                                                <div className="media-image mr-3 rounded-circle">
                                                    <a href="#"><img className="rounded-circle w-45" src={custom.avatar} alt="customer image" /></a>
                                                </div>
                                                <div className="media-body align-self-center">
                                                    <a href="#"><h6 className="mt-0 text-dark font-weight-medium">{custom.name}</h6></a>
                                                    <small>{custom.email}</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td >{custom.ordered_units} Orders</td>
                                        <td className="text-dark d-none d-md-block">${custom.order_cost}</td>
                                    </tr>

                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Newcustomer;