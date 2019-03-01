import React, { Component } from 'react';

class Soldbyunits extends Component {

    constructor() {
        super();

        this.state = {
            units: [
                { 'product': 'Bagpack', 'sold_units': 4, 'change_percent': 33, 'change_status': 'up' },
                { 'product': 'T-shirt', 'sold_units': 10, 'change_percent': 150, 'change_status': 'up' },
                { 'product': 'Coat', 'sold_units': 17, 'change_percent': 50, 'change_status': 'up' },
                { 'product': 'Necklace', 'sold_units': 10, 'change_percent': 150, 'change_status': 'up' },
                { 'product': 'Jeans Pant', 'sold_units': 7, 'change_percent': 300, 'change_status': 'down' },
                { 'product': 'Shoes', 'sold_units': 70, 'change_percent': 200, 'change_status': 'up' },
                { 'product': 'Wallets', 'sold_units': 5, 'change_percent': 120, 'change_status': 'down' },

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
            <div className="col-xl-4 col-lg-6 col-12">

                <div className="card card-table-border-none" data-scroll-height="550" style={{ 'height': '560px' }}>
                    <div className="card-header justify-content-between">
                        <h2>Sold by Units</h2>
                        <div>
                            <button className="text-black-50 mr-2 font-size-20"><i className="mdi mdi-cached"></i></button>
                            <div className="dropdown show d-inline-block widget-dropdown" ref={node => { this.node = node; }}>
                                <button className="dropdown-toggle icon-burger-mini" role="button" id="dropdown-units" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" onClick={this.handleAction}></button>
                                {this.state.showAction ?
                                    <ul className="dropdown-menu dropdown-menu-right show" aria-labelledby="dropdown-units">
                                        <li className="dropdown-item"><a href="#">Action</a></li>
                                        <li className="dropdown-item"><a href="#">Another action</a></li>
                                        <li className="dropdown-item"><a href="#">Something else here</a></li>
                                    </ul> : null
                                }
                            </div>
                        </div>
                    </div>

                    <div className="card-body slim-scroll py-0 scroller" >
                        <table className="table ">
                            <tbody>
                                {this.state.units.map((unit, index) =>
                                    <tr key={index}>
                                        <td className="text-dark">{unit.product}</td>
                                        <td className="text-center">{unit.sold_units}</td>
                                        <td className="text-right">{unit.change_percent}% <i className={unit.change_status == 'up' ? "mdi text-success pl-1 font-size-12 mdi-arrow-up-bold" : "mdi mdi-arrow-down-bold text-danger pl-1 font-size-12"}></i> </td>
                                    </tr>
                                )}


                            </tbody>
                        </table>

                    </div>

                    <div className="card-footer bg-white py-4">
                        <a href="#" className="btn-link py-3 text-uppercase">View Report</a>
                    </div>
                </div>
            </div >
        );
    }
}
export default Soldbyunits;