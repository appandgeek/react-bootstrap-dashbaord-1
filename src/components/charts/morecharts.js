import React, { Component } from 'react';
import Doughnutchart from './doughnut';
import Polarchart from './polar';
import Radarchart from './radarchart';

class Morecharts extends Component {

    constructor() {
        super();
        this.state = {
            donut: {
                labels: ["Desktop", "Tablet", "Mobile"],
                datasets: [
                    {
                        label: ["Desktop", "Tablet", "Mobile"],
                        data: [60000, 15000, 25000],
                        backgroundColor: [
                            "rgba(76, 132, 255, 1)",
                            "rgba(76, 132, 255, 0.85)",
                            "rgba(76, 132, 255, 0.70)",
                        ],
                        borderWidth: 1
                    }
                ],
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    cutoutPercentage: 75,
                    titleFontColor: "#888",
                    bodyFontColor: "#555",
                    titleFontSize: 12,
                    bodyFontSize: 15,
                    backgroundColor: "rgba(256,256,256,0.95)",
                    displayColors: true,
                    xPadding: 10,
                    yPadding: 7,
                    borderColor: "rgba(220, 220, 220, 0.9)",
                    borderWidth: 2,
                    caretSize: 6,
                    caretPadding: 5
                }

            },
            polardata: {
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
            radardata: {

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
                        text: "Radar Chart"
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

            }

        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="card card-default">
                        <div className="card-header justify-content-center">
                            <h2 className="text-center">Donut Chart</h2>
                        </div>
                        <div className="card-body" style={{ "height": "400px" }}>
                            <Doughnutchart data={this.state.donut} height={300} />
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="card card-default">
                        <div className="card-header justify-content-center">
                            <h2 className="text-center">Polar Chart</h2>
                        </div>
                        <div className="card-body" style={{ "height": "400px" }}>
                            <Polarchart data={this.state.polardata} height={300} />
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="card card-default">
                        <div className="card-header justify-content-center">
                            <h2 className="text-center">Radar Chart</h2>
                        </div>
                        <div className="card-body" style={{ 'height': '400px' }}>
                            <Radarchart data={this.state.radardata} height={280} />
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Morecharts;