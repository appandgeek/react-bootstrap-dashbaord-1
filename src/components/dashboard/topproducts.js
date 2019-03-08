import React, { Component } from 'react';
import CurrencyFormat from "react-currency-format";

class Topproducts extends Component {

    constructor() {

        super();
        this.state = {
            products: [
                { 'title': 'Coatch Swagger', 'original_price': 300, 'discount_price': 280, 'description': 'Statement belting with double-turnlock hardware adds “swagger” to a simple.', 'image': 'assets/img/products/p1.jpg', 'total_sale': 20 },
                { 'title': 'Coatch Shoe', 'original_price': 300, 'discount_price': 250, 'description': 'Statement belting with double-turnlock hardware adds “swagger” to a simple.', 'image': 'assets/img/products/p2.jpg', 'total_sale': 10 },
                { 'title': 'Gucci Watch', 'original_price': 250, 'discount_price': 200, 'description': 'Statement belting with double-turnlock hardware adds “swagger” to a simple.', 'image': 'assets/img/products/p3.jpg', 'total_sale': 20 }
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
            <div className="col-xl-7">
                <div className="card card-default" data-scroll-height="580">
                    <div className="card-header justify-content-between mb-4" id='topproducts'>
                        <h2>Top Products</h2>
                        <div>
                            <button className="text-black-50 mr-2 font-size-20"><i className="mdi mdi-cached"></i></button>
                            <div className="dropdown show d-inline-block widget-dropdown">
                                <a className="dropdown-toggle icon-burger-mini" href="#topproducts" role="button" id="dropdown-notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" onClick={this.handleAction}></a>
                                {this.state.showAction ?
                                    <ul className="dropdown-menu dropdown-menu-right show" aria-labelledby="dropdown-notification">
                                        <li className="dropdown-item"><a href="#topproducts">Action</a></li>
                                        <li className="dropdown-item"><a href="#topproducts">Another action</a></li>
                                        <li className="dropdown-item"><a href="#topproducts">Something else here</a></li>
                                    </ul> : null
                                }
                            </div>
                        </div>

                    </div>

                    <div className="card-body py-0">
                        {this.state.products.map((product, index) =>
                            <div className="media d-flex mb-5" style={{ 'textAlign': 'left' }} key={index}>
                                <div className="media-image align-self-center mr-3 rounded">
                                    <a href="#topproducts"><img src={product.image} alt="customer avatar" /></a>
                                </div>
                                <div className="media-body align-self-center">
                                    <a href="#topproducts"><h6 className="mb-3 text-dark font-weight-medium"> {product.title}</h6></a>
                                    <p className="float-md-right"><span className="text-dark mr-2">{product.total_sale}</span>Sales</p>
                                    <p className="d-none d-md-block">{product.description}</p>
                                    <p className="mb-0">
                                        <del><CurrencyFormat
                                            value={product.original_price}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"$"}
                                        /></del>
                                        <span className="text-dark ml-3"><CurrencyFormat
                                            value={product.discount_price}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"$"}
                                        /></span>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Topproducts;