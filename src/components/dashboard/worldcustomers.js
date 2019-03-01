import React, { Component } from 'react';

class Worldcustomers extends Component {

    render() {
        return (

            <div className="col-xl-6">

                <div className="card card-default" >
                    <div className="card-header d-block d-md-flex justify-content-between">
                        <h2>World Wide Customer </h2>
                        <div className="dropdown show d-inline-block widget-dropdown ml-auto">
                            <a className="dropdown-toggle" href="#" role="button" id="world-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                World Wide
                        </a>
                            <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="world-dropdown">
                                <li className="dropdown-item"><a href="#">Continetal chart</a></li>
                                <li className="dropdown-item"><a href="#">Sub-continental</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-body vector-map-world">
                        <div id="world" style={{ "height": "100%", "width": "100%" }}></div>
                    </div>
                    <div className="card-footer d-flex flex-wrap bg-white p-0">
                        <div className="col-6">
                            <div className="p-4">
                                <ul className="d-flex flex-column justify-content-between">
                                    <li className="mb-2"><i className="mdi mdi-checkbox-blank-circle-outline mr-2" style={{ "color": "#29cc97" }}></i>America <span className="float-right">5k</span></li>
                                    <li><i className="mdi mdi-checkbox-blank-circle-outline mr-2" style={{ "color": "#4c84ff " }}></i>Australia <span className="float-right">3k</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="p-4 border-left">
                                <ul className="d-flex flex-column justify-content-between">
                                    <li className="mb-2"><i className="mdi mdi-checkbox-blank-circle-outline mr-2" style={{ "color": "#ffa128" }}></i>Europe <span className="float-right">4k</span></li>
                                    <li><i className="mdi mdi-checkbox-blank-circle-outline mr-2" style={{ "color": "#fe5461" }}></i>Africa <span className="float-right">2k</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Worldcustomers;