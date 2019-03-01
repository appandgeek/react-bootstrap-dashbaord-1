import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Signup extends Component {

    render() {

        return (

            <div className="container d-flex flex-column justify-content-between vh-100">
                <div className="row justify-content-center mt-5">
                    <div className="col-xl-5 col-lg-6 col-md-10">
                        <div className="card">
                            <div className="card-header bg-primary">
                                <div className="app-brand">
                                    <Link to="/">
                                        <svg className="brand-icon" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="30"
                                            height="33" viewBox="0 0 30 33">
                                            <g fill="none" fill-rule="evenodd">
                                                <path className="logo-fill-blue" fill="#7DBCFF" d="M0 4v25l8 4V0zM22 4v25l8 4V0z" />
                                                <path className="logo-fill-white" fill="#FFF" d="M11 4v25l8 4V0z" />
                                            </g>
                                        </svg>
                                        <span className="brand-name">Sleek Dashboard</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="card-body p-5" style={{ 'textAlign': 'left' }}>
                                <h4 className="text-dark mb-5">Sign Up</h4>
                                <form action="/index.html">
                                    <div className="row">
                                        <div className="form-group col-md-12 mb-4">
                                            <input type="text" className="form-control input-lg" id="name" aria-describedby="nameHelp" placeholder="Name" />
                                        </div>
                                        <div className="form-group col-md-12 mb-4">
                                            <input type="email" className="form-control input-lg" id="email" aria-describedby="emailHelp" placeholder="Username" />
                                        </div>
                                        <div className="form-group col-md-12 ">
                                            <input type="password" className="form-control input-lg" id="password" placeholder="Password" />
                                        </div>
                                        <div className="form-group col-md-12 ">
                                            <input type="password" className="form-control input-lg" id="cpassword" placeholder="Confirm Password" />
                                        </div>
                                        <div className="col-md-12">
                                            <div className="d-inline-block mr-3">
                                                <label className="control control-checkbox">
                                                    <input type="checkbox" />
                                                    <div className="control-indicator"></div>
                                                    I Agree the terms and conditions
                            </label>

                                            </div>
                                            <button type="submit" className="btn btn-lg btn-primary btn-block mb-4">Sign Up</button>
                                            <p>Already have an account?
                            <Link className="text-blue" to="/signin">Sign in</Link>
                                            </p>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright pl-0">
                    <p className="text-center">&copy; 2018 Copyright Sleek Dashboard Bootstrap Template by
                <a className="text-primary" href="http://www.iamabdus.com/" target="_blank">Abdus</a>.
              </p>
                </div>
            </div>
        );
    }
}

export default Signup;