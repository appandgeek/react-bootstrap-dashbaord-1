import React, { Component } from 'react';
import CurrencyFormat from "react-currency-format";

class Recentorders extends Component {

    constructor() {
        super();
        this.state = {
            orders: [
                { 'order_id': 1234, 'product_name': 'Shoes', 'units': 2, 'order_date': 'oct 12,2018', 'order_cost': '230', 'status': 'compleated', 'status_code': 1 },
                { 'order_id': 4321, 'product_name': 'Shirts', 'units': 3, 'order_date': 'oct 20,2018', 'order_cost': '30', 'status': 'delayed', 'status_code': 2 },
                { 'order_id': 8271, 'product_name': 'Jeans', 'units': 5, 'order_date': 'nov 20,2018', 'order_cost': '130', 'status': 'on hold', 'status_code': 3 },
                { 'order_id': 7847, 'product_name': 'Toddler Shoes, Gucci Watch', 'units': 1, 'order_date': 'Nov 28,2018', 'order_cost': '530', 'status': 'compleated', 'status_code': 1 },
                { 'order_id': 6676, 'product_name': 'Speed 500 Ignite', 'units': 5, 'order_date': 'dec 2,2018', 'order_cost': '130', 'status': 'cancelled', 'status_code': 4 }

            ],
            showAction: 0
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

    handleAction(val) {

        if (this.state.showAction !== val) {
            this.setState({

                showAction: val
            });
        }
        else {
            this.setState({

                showAction: 0
            });
        }


    }

    render() {
        return (
            <div className="col-12">
                <div className="card card-table-border-none" id="recent-orders">
                    <div className="card-header justify-content-between">
                        <h2>Recent Orders</h2>
                        <div className="date-range-report ">
                            <span></span>
                        </div>
                    </div>
                    <div className="card-body pt-0 pb-5">
                        <table className="table card-table table-responsive table-responsive-large" style={{ "width": "100%" }}>
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Product Name</th>
                                    <th className="d-none d-md-table-cell">Units</th>
                                    <th className="d-none d-md-table-cell">Order Date</th>
                                    <th className="d-none d-md-table-cell">Order Cost</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.orders.map((order, index) =>


                                    <tr key={index} ref={node => { this.node = node; }}>
                                        <td >{order.order_id}</td>
                                        <td >
                                            <a className="text-dark" href="">{order.product_name}</a>
                                        </td>
                                        <td className="d-none d-md-table-cell">{order.units} Unit</td>
                                        <td className="d-none d-md-table-cell">{order.order_date}</td>
                                        <td className="d-none d-md-table-cell"><CurrencyFormat
                                            value={order.order_cost}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"$"}
                                        /></td>
                                        <td >
                                            <span className={order.status_code == 1 ? "badge badge-success" : order.status_code == 2 || order.status_code == 3 ? "badge badge-warning" : order.status_code == 4 ? "badge badge-danger" : "badge badge-warning"}> {order.status}</span>
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown show d-inline-block widget-dropdown">
                                                <button className="dropdown-toggle icon-burger-mini" href="" role="button" id="dropdown-recent-order1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" onClick={this.handleAction.bind(this, index + 1)}></button>
                                                {this.state.showAction === (index + 1) ?
                                                    <ul className="dropdown-menu dropdown-menu-right show" aria-labelledby="dropdown-recent-order1">
                                                        <li className="dropdown-item">
                                                            <a href="#">View</a>
                                                        </li>
                                                        <li className="dropdown-item">
                                                            <a href="#">Remove</a>
                                                        </li>
                                                    </ul> : null}
                                            </div>
                                        </td>
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

export default Recentorders;