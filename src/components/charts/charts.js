import React, { Component } from 'react';
import Linechart from './linechart';
import Nextcharts from './nextcharts';
import Morecharts from './morecharts';

class Charts extends Component {

    constructor() {
        super();
        this.state = {
            simplelinechart: {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec"
                ],
                datasets: [
                    {
                        label: "",
                        backgroundColor: "transparent",
                        borderColor: "rgb(82, 136, 255)",
                        data: [
                            100,
                            11000,
                            10000,
                            14000,
                            11000,
                            17000,
                            14500,
                            18000,
                            5000,
                            23000,
                            14000,
                            19000
                        ],
                        lineTension: 0.3,
                        pointRadius: 5,
                        pointBackgroundColor: "rgba(255,255,255,1)",
                        pointHoverBackgroundColor: "rgba(255,255,255,1)",
                        pointBorderWidth: 2,
                        pointHoverRadius: 8,
                        pointHoverBorderWidth: 1
                    }
                ],
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    layout: {
                        padding: {
                            right: 10
                        }
                    },
                    scales: {
                        xAxes: [
                            {
                                gridLines: {
                                    display: false
                                }
                            }
                        ],
                        yAxes: [
                            {
                                gridLines: {
                                    display: true,
                                    color: "#eee",
                                    zeroLineColor: "#eee",
                                }
                            }
                        ]
                    },
                    responsive: true,
                    intersect: false,
                    enabled: true,
                    titleFontColor: "#888",
                    bodyFontColor: "#555",
                    titleFontSize: 12,
                    bodyFontSize: 18,
                    backgroundColor: "rgba(256,256,256,0.95)",
                    xPadding: 20,
                    yPadding: 10,
                    displayColors: false,
                    borderColor: "rgba(220, 220, 220, 0.9)",
                    borderWidth: 2,
                    caretSize: 10,
                    caretPadding: 15

                }
            },
            duellinechart: {
                labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
                datasets: [
                    {
                        label: "Old",
                        pointRadius: 4,
                        pointBackgroundColor: "rgba(255,255,255,1)",
                        pointBorderWidth: 2,
                        fill: false,
                        backgroundColor: "transparent",
                        borderWidth: 2,
                        borderColor: "#fdc506",
                        data: [0, 4, 3, 5.5, 3, 4.7, 0]
                    },
                    {
                        label: "New",
                        fill: false,
                        pointRadius: 4,
                        pointBackgroundColor: "rgba(255,255,255,1)",
                        pointBorderWidth: 2,
                        backgroundColor: "transparent",
                        borderWidth: 2,
                        borderColor: "#4c84ff",
                        data: [0, 2, 4.3, 3.8, 5.2, 1.8, 2.2]
                    }
                ],
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: {
                            right: 10
                        }
                    },

                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [
                            {
                                gridLines: {
                                    drawBorder: false,
                                    display: false
                                },
                                ticks: {
                                    display: false, // hide main x-axis line
                                    beginAtZero: true
                                },
                                barPercentage: 1.8,
                                categoryPercentage: 0.2
                            }
                        ],
                        yAxes: [
                            {
                                gridLines: {
                                    drawBorder: false, // hide main y-axis line
                                    display: false
                                },
                                ticks: {
                                    display: false,
                                    beginAtZero: true
                                }
                            }
                        ]
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
            areachart: {
                labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
                datasets: [
                    {
                        label: "New",
                        pointHitRadius: 10,
                        pointRadius: 0,
                        fill: true,
                        backgroundColor: "rgba(76, 132, 255, 0.9)",
                        borderColor: "rgba(76, 132, 255, 0.9)",
                        data: [0, 4, 2, 6.5, 3, 4.7, 0]
                    },
                    {
                        label: "Old",
                        pointHitRadius: 10,
                        pointRadius: 0,
                        fill: true,
                        backgroundColor: "rgba(253, 197, 6, 0.9)",
                        borderColor: "rgba(253, 197, 6, 1)",
                        data: [0, 2, 4.3, 3.8, 5.2, 1.8, 2.2]
                    }
                ],
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    layout: {
                        padding: {
                            right: 10
                        }
                    },
                    scales: {
                        xAxes: [
                            {
                                gridLines: {
                                    drawBorder: false,
                                    display: false
                                },
                                ticks: {
                                    display: false, // hide main x-axis line
                                    beginAtZero: true
                                },
                                barPercentage: 1.8,
                                categoryPercentage: 0.2
                            }
                        ],
                        yAxes: [
                            {
                                gridLines: {
                                    drawBorder: false, // hide main y-axis line
                                    display: false
                                },
                                ticks: {
                                    display: false,
                                    beginAtZero: true
                                }
                            }
                        ]
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
            <div className="content">
                <div className="row">
                    <div className="col-12">
                        <div className="card card-default">
                            <div className="card-header justify-content-center">
                                <h2 className="text-center">Simple Line Chart</h2>
                            </div>
                            <div className="card-body" style={{
                                "height": "450px"
                            }}>
                                <Linechart data={this.state.simplelinechart} height={350} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card card-default">
                            <div className="card-header justify-content-center">
                                <h2 className="text-center">Dual Line Chart</h2>
                            </div>
                            <div className="card-body" style={{
                                "height": "300px"
                            }}>

                                <Linechart data={this.state.duellinechart} height={200} />

                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card card-default">
                            <div className="card-header justify-content-center">
                                <h2 className="text-center">Area Chart</h2>
                            </div>
                            <div className="card-body" style={{
                                "height": "300px"
                            }}>

                                <Linechart data={this.state.areachart} height={200} />

                            </div>
                        </div>
                    </div>
                    <Nextcharts />
                    <Morecharts />
                </div>
            </div>
        );
    }
}

export default Charts;