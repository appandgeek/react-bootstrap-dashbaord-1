import React, { Component } from 'react';

class Invoice extends Component {

    constructor() {
        super();
        this.state = {
            invoice_from: {
                'name': 'Company Name', 'address': '47 Holmes Green, Sophiebury, WP9M 3ZZ', 'email': 'example@gmail.com', 'phone': '91 2312 23121'
            },
            invoice_to: {
                'name': 'Company Name', 'address': '47 Holmes Green, Sophiebury, WP9M 3ZZ', 'email': 'example@gmail.com', 'phone': '91 2312 23121'
            },

            invoice_details: {
                'invoice_id': '2365546', 'date': 'March 25, 2018', 'vat_no': 'PL6541215450'
            },

            invoice_beakage: [
                { 'id': 1, 'item': 'Platinum Support', 'Description': '1 Year subscription 24*7', 'quantity': 1, 'unit_cost': 120, 'total': 120 },
                { 'id': 2, 'item': 'Custom Service', 'Description': 'Instalation and Customization (cost per hour)', 'quantity': 10, 'unit_cost': 30, 'total': 300 },
                { 'id': 3, 'item': 'Origin License', 'Description': 'Extended License', 'quantity': 1, 'unit_cost': 999, 'total': 999 },
                { 'id': 4, 'item': 'Hosting', 'Description': 'One year subscription', 'quantity': 1, 'unit_cost': 599, 'total': 599 }

            ]

        }
    }

    render() {

        return (

            <div className="content">
                <div className="invoice-wrapper rounded border bg-white py-5 px-3 px-md-4 px-lg-5">
                    <div className="d-flex justify-content-between">
                        <h2 className="text-dark font-weight-medium">Invoice #2365546</h2>
                        <div className="btn-group">
                            <button className="btn btn-sm btn-secondary">
                                <i className="mdi mdi-content-save"></i> Save</button>
                            <button className="btn btn-sm btn-secondary">
                                <i className="mdi mdi-printer"></i> Print</button>
                        </div>
                    </div>

                    <div className="row pt-5" style={{ 'textAlign': 'left' }}>
                        <div className="col-xl-3 col-lg-4">
                            <p className="text-dark mb-2">From</p>
                            <address>
                                {this.state.invoice_from.name}
                                <br />{this.state.invoice_from.address}
                                <br /> {this.state.invoice_from.email}
                                <br /> Phone: +{this.state.invoice_from.phone}
                            </address>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                            <p className="text-dark mb-2">To</p>
                            <address>
                                {this.state.invoice_to.name}
                                <br />{this.state.invoice_to.address}
                                <br /> {this.state.invoice_to.email}
                                <br /> Phone: +{this.state.invoice_to.phone}
                            </address>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                            <p className="text-dark mb-2">Details</p>
                            <address>
                                Invoice ID:
                            <span className="text-dark">#{this.state.invoice_details.invoice_id}</span>
                                <br /> {this.state.invoice_details.date}
                                <br /> VAT: {this.state.invoice_details.vat_no}
                            </address>
                        </div>
                    </div>

                    <table className="table mt-3 table-striped table-responsive table-responsive-large" style={{ "width": "100%" }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Unit Cost</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.invoice_beakage.map((invoice, index) =>
                                <tr key={index}>
                                    <td>{invoice.id}</td>
                                    <td>{invoice.item}</td>
                                    <td>{invoice.Description}</td>
                                    <td>{invoice.quantity}</td>
                                    <td>${invoice.unit_cost}</td>
                                    <td>${invoice.total}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <div className="row justify-content-end">
                        <div className="col-lg-5 col-xl-4 col-xl-3 ml-sm-auto">
                            <ul className="list-unstyled mt-4">
                                <li className="mid pb-3 text-dark"> Subtotal
                    <span className="d-inline-block float-right text-default">$7.897,00</span>
                                </li>
                                <li className="mid pb-3 text-dark">Vat(10%)
                    <span className="d-inline-block float-right text-default">$789,70</span>
                                </li>
                                <li className="pb-3 text-dark">Total
                    <span className="d-inline-block float-right">$8.686,70</span>
                                </li>
                            </ul>
                            <a href="#" className="btn btn-block mt-2 btn-lg btn-primary btn-pill"> Procced to Payment</a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Invoice;