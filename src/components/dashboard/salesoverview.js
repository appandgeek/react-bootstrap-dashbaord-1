import React, { Component } from 'react';
import Polar from '../charts/polar';
import Radar from '../charts/radarchart';

class Salesoverview extends Component {

    constructor() {
        super();
        this.state = {

            salesStatus: {
                datasets: [
                    {
                        data: [43, 23, 53, 33, 55],
                        backgroundColor: [
                            "rgba(41,204,151,0.5)",
                            "rgba(254,88,101,0.5)",
                            "rgba(128,97,239,0.5)",
                            "rgba(254,196,0,0.5)",
                            "rgba(76,132,255,0.5)"
                        ],
                        label: "" // for legend
                    }
                ],
                labels: ["Total Sales", "Rejected", "Completed", "Pending", "Reserve"],
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        position: "right",
                        display: false
                    },
                    layout: {
                        padding: {
                            top: 10,
                            bottom: 10,
                            right: 10,
                            left: 10
                        }
                    },
                    title: {
                        display: false,
                        text: "Chart.js Polar Area Chart"
                    },
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            fontColor: "#1b223c",
                            fontSize: 12,
                            stepSize: 10,
                            max: 60
                        },
                        reverse: false
                    },
                    animation: {
                        animateRotate: false,
                        animateScale: true
                    },
                    tooltips: {
                        titleFontColor: "#888",
                        bodyFontColor: "#555",
                        titleFontSize: 12,
                        bodyFontSize: 14,
                        backgroundColor: "rgba(256,256,256,0.95)",
                        displayColors: true,
                        borderColor: "rgba(220, 220, 220, 0.9)",
                        borderWidth: 2
                    }
                }
            },
            monthlysales: {

                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ],
                datasets: [
                    {
                        label: "Current Year",
                        backgroundColor: "rgba(76,132,255,0.2)",
                        borderColor: "#4c84ff",
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        pointBorderColor: "rgba(76,132,255,1)",
                        pointBackgroundColor: "#ffffff",
                        data: [25, 31, 43, 48, 21, 36, 23, 12, 33, 36, 28, 55]
                    },
                    {
                        label: "Previous Year",
                        backgroundColor: "rgba(41, 204, 151, 0.2)",
                        borderColor: "#29cc97",
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        pointBorderColor: "#29cc97",
                        pointBackgroundColor: "#ffffff",
                        data: [45, 77, 22, 12, 56, 43, 71, 23, 54, 19, 32, 55]
                    }
                ],

                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    title: {
                        display: false,
                        text: "Chart.js Radar Chart"
                    },
                    layout: {
                        padding: {
                            top: 10,
                            bottom: 10,
                            right: 10,
                            left: 10
                        }
                    },
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            fontColor: "#1b223c",
                            fontSize: 12,
                            stepSize: 10,
                            max: 60
                        }
                    },
                    tooltips: {
                        titleFontColor: "#888",
                        bodyFontColor: "#555",
                        titleFontSize: 12,
                        bodyFontSize: 14,
                        backgroundColor: "rgba(256,256,256,0.95)",
                        displayColors: true,
                        borderColor: "rgba(220, 220, 220, 0.9)",
                        borderWidth: 2
                    }
                }
            },
            showSalesStatus: true,
            showMonthlySales: false
        }

        this.handleMonthly = this.handleMonthly.bind(this);
        this.handleSales = this.handleSales.bind(this);
    }

    handleSales() {

        this.setState({
            showSalesStatus: true,
            showMonthlySales: false
        });
    }

    handleMonthly() {

        this.setState({
            showMonthlySales: true,
            showSalesStatus: false
        });


    }
    render() {
        console.log(this.state.showSalesStatus);
        return (

            <div className="col-xl-4 col-lg-6 col-12">

                <div className="card card-default">
                    <div className="card-header justify-content-center">
                        <h2>Sales Overview</h2>
                    </div>
                    <div className="card-body pt-0">
                        <ul className="nav nav-pills mb-5 mt-5 nav-style-fill nav-justified" id="pills-tab" role="tablist">
                            <li className="nav-item">
                                <a className={this.state.showSalesStatus ? "nav-link active" : "nav-link"} href="#pills-home" role="tab" aria-controls="pills-home" onClick={this.handleSales}>Sales Status</a>
                            </li>
                            <li className="nav-item">
                                <a className={this.state.showMonthlySales ? "nav-link active" : "nav-link"} href="#pills-profile" role="tab" aria-controls="pills-profile" onClick={this.handleMonthly}>Monthly Sales</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            {this.state.showSalesStatus ?
                                <div className="tab-pane fade show active" id="/#pills-home" role="tabpanel" >
                                    <Polar data={this.state.salesStatus} height={275} />
                                </div> : this.state.showMonthlySales ?
                                    <div className="tab-pane fade show active" id="/#pills-profile" role="tabpanel" >
                                        <Radar data={this.state.monthlysales} height={275} />
                                    </div> : null
                            }
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Salesoverview;