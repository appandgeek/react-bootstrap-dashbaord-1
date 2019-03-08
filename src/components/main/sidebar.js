import React, { Component } from 'react';
import * as actionTypes from '../../store/action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        const currentPath = window.location.pathname;
        return (
            <aside className="left-sidebar bg-sidebar">
                <div id="sidebar" className="sidebar sidebar-with-footer">
                    <div className="app-brand">
                        <a href="/">
                            <svg
                                className="brand-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="xMidYMid"
                                width="30"
                                height="33"
                                viewBox="0 0 30 33"
                            >
                                <g fill="none" fillRule="evenodd">
                                    <path
                                        className="logo-fill-blue"
                                        fill="#7DBCFF"
                                        d="M0 4v25l8 4V0zM22 4v25l8 4V0z"
                                    />
                                    <path className="logo-fill-white" fill="#FFF" d="M11 4v25l8 4V0z" />
                                </g>
                            </svg>
                            <span className="brand-name">Sleek Dashboard</span>
                        </a>
                    </div>
                    <div className="sidebar-scrollbar">

                        <ul className="nav sidebar-inner" id="sidebar-menu">
                            <li className={this.props.hasPages || this.props.hasChart || currentPath.includes('profile') || currentPath.includes('invoice') || currentPath.includes('error') ? "" : "active"} onClick={this.props.dashboard}>
                                <Link className="sidenav-item-link" to="/" data-toggle="collapse" data-target="#dashboard"
                                    aria-expanded="false" aria-controls="dashboard">
                                    <i className="mdi mdi-view-dashboard-outline"></i>
                                    <span className="nav-text">Dashboard</span>
                                </Link>

                            </li>
                            <li className={this.props.hasChart ? "has-sub active expand" : "has-sub"} onClick={this.props.charts}>
                                <a className={this.props.hasChart ? "sidenav-item-link collapsed" : "sidenav-item-link"} href="javascript:void(0)" data-toggle="collapse" data-target="#charts"
                                    aria-expanded="false" aria-controls="charts">
                                    <i className="mdi mdi-chart-pie"></i>
                                    <span className="nav-text">Charts</span> <b className="caret"></b>
                                </a>
                                <ul className={this.props.hasChart ? "collapse show" : currentPath.includes('charts') && this.props.hasChart ? "collapse show" : "collapse"} id="charts"
                                    data-parent="#sidebar-menu">
                                    <div className="sub-menu">



                                        <li onClick={this.props.charts}>
                                            <Link className="sidenav-item-link" to="/charts">
                                                <span className="nav-text">ChartJS</span>

                                            </Link>
                                        </li>




                                    </div>
                                </ul>
                            </li>

                            <li className={this.props.hasPages ? "has-sub active expand  " : "has-sub"} onClick={this.props.pages}>
                                <a className={this.props.hasPages ? "sidenav-item-link" : "sidenav-item-link collapsed"} href="javascript:void(0)" data-toggle="collapse" data-target="#pages"
                                    aria-expanded="false" aria-controls="pages">
                                    <i className="mdi mdi-image-filter-none"></i>
                                    <span className="nav-text">Pages</span> <b className="caret"></b>
                                </a>
                                <ul className={this.props.hasPages ? "collapse show" : "collapse"} id="pages"
                                    data-parent="#sidebar-menu">
                                    <div className="sub-menu">



                                        <li onClick={this.props.pages}>
                                            <Link className="sidenav-item-link" to="/profile">
                                                <span className="nav-text">User Profile</span>

                                            </Link>
                                        </li>





                                        <li className={this.props.hasSubAuth ? "has-sub expanded" : "has-sub"} onClick={this.props.auths}>
                                            <a className={this.props.hasSubAuth ? "sidenav-item-link" : "sidenav-item-link collapse"} href="javascript:void(0)" data-toggle="collapse" data-target="#authentication"
                                                aria-expanded="false" aria-controls="authentication">
                                                <span className="nav-text">Authentication</span> <b className="caret"></b>
                                            </a>
                                            <ul className={this.props.hasSubAuth ? "collapse show" : "collapse"} id="authentication">
                                                <div className="sub-menu">

                                                    <li onClick={this.props.auths}>
                                                        <Link to="/signin">Sign In</Link>
                                                    </li>

                                                    <li onClick={this.props.auths}>
                                                        <Link to="/signup">Sign Up</Link>
                                                    </li>

                                                </div>
                                            </ul>
                                        </li>




                                        <li className={this.props.hasOtherPages ? "has-sub expanded" : "has-sub"} onClick={this.props.others}>
                                            <a className={this.props.hasOtherPages ? "sidenav-item-link" : "sidenav-item-link collapse"} href="javascript:void(0)" data-toggle="collapse" data-target="#others"
                                                aria-expanded="false" aria-controls="others">
                                                <span className="nav-text">Others</span> <b className="caret"></b>
                                            </a>
                                            <ul className={this.props.hasOtherPages ? "collapse show" : "collapse"} id="others">
                                                <div className="sub-menu">

                                                    <li onClick={this.props.invoice}>
                                                        <Link to="/invoice">invoice</Link>
                                                    </li>

                                                    <li onClick={this.props.invoice}>
                                                        <Link to="/error">Error</Link>
                                                    </li>

                                                </div>
                                            </ul>
                                        </li>



                                    </div>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </aside >
        );
    }
}
const mapStateToProps = state => {
    return {
        'hasChart': state.hasChart,
        'hasPages': state.hasPages,
        'hasSubAuth': state.hasSubAuth,
        'hasOtherPages': state.hasOtherPages
    }
}
const mapDispatchToProps = dispatch => {
    return {
        charts: () => dispatch({ type: actionTypes.HAS_CHART }),
        pages: () => dispatch({ type: actionTypes.HAS_PAGES }),
        auths: () => dispatch({ type: actionTypes.HAS_SUB_AUTH }),
        others: () => dispatch({ type: actionTypes.HAS_OTHER_PAGES }),
        dashboard: () => dispatch({ type: actionTypes.DASHBOARD }),
        invoice: () => dispatch({ type: actionTypes.INVOICE_MENU })
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);