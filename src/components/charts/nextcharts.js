import React, { Component } from 'react';
import Barchart from './barchart';
import Linechart from './linechart';

class Nextcharts extends Component {

    constructor() {

        super();
        var activityData = [
            {
                first: [0, 65, 52, 115, 98, 165, 125],
                second: [45, 38, 100, 87, 152, 187, 85]
            },
            {
                first: [0, 65, 77, 33, 49, 100, 100],
                second: [88, 33, 20, 44, 111, 140, 77]
            },
            {
                first: [0, 40, 77, 55, 33, 116, 50],
                second: [55, 32, 20, 55, 111, 134, 66]
            },
            {
                first: [0, 44, 22, 77, 33, 151, 99],
                second: [60, 32, 120, 55, 19, 134, 88]
            }
        ];
        this.state = {
            barchart: {
                labels: ["4 Jan", "5 Jan", "6 Jan", "7 Jan", "8 Jan", "9 Jan", "10 Jan"],
                datasets: [
                    {
                        label: "Referral",
                        backgroundColor: "rgb(76, 132, 255)",
                        borderColor: "rgba(76, 132, 255,0)",
                        data: [78, 90, 70, 75, 45, 52, 22],
                        pointBackgroundColor: "rgba(76, 132, 255,0)",
                        pointHoverBackgroundColor: "rgba(76, 132, 255,1)",
                        pointHoverRadius: 3,
                        pointHitRadius: 30
                    },
                    {
                        label: "Direct",
                        backgroundColor: "rgb(254, 196, 0)",
                        borderColor: "rgba(254, 196, 0,0)",
                        data: [88, 115, 80, 96, 65, 77, 38],
                        pointBackgroundColor: "rgba(254, 196, 0,0)",
                        pointHoverBackgroundColor: "rgba(254, 196, 0,1)",
                        pointHoverRadius: 3,
                        pointHitRadius: 30
                    },
                    {
                        label: "Social",
                        backgroundColor: "rgb(41, 204, 151)",
                        borderColor: "rgba(41, 204, 151,0)",
                        data: [103, 135, 102, 116, 83, 97, 55],
                        pointBackgroundColor: "rgba(41, 204, 151,0)",
                        pointHoverBackgroundColor: "rgba(41, 204, 151,1)",
                        pointHoverRadius: 3,
                        pointHitRadius: 30
                    }
                ],
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        display: false
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
                                    display: true
                                },
                                ticks: {
                                    beginAtZero: true,
                                    stepSize: 50,
                                    fontColor: "#8a909d",
                                    fontFamily: "Roboto, sans-serif",
                                    max: 200
                                }
                            }
                        ]
                    },
                    tooltips: {}
                }
            },
            productchart: {
                labels: [
                    "4 Jan",
                    "5 Jan",
                    "6 Jan",
                    "7 Jan",
                    "8 Jan",
                    "9 Jan",
                    "10 Jan"
                ],
                datasets: [
                    {
                        label: "Active",
                        backgroundColor: "transparent",
                        borderColor: "rgb(82, 136, 255)",
                        data: activityData[0].first,
                        lineTension: 0,
                        pointRadius: 5,
                        pointBackgroundColor: "rgba(255,255,255,1)",
                        pointHoverBackgroundColor: "rgba(255,255,255,1)",
                        pointBorderWidth: 2,
                        pointHoverRadius: 7,
                        pointHoverBorderWidth: 1
                    },
                    {
                        label: "Inactive",
                        backgroundColor: "transparent",
                        borderColor: "rgb(255, 199, 15)",
                        data: activityData[0].second,
                        lineTension: 0,
                        borderDash: [10, 5],
                        borderWidth: 1,
                        pointRadius: 5,
                        pointBackgroundColor: "rgba(255,255,255,1)",
                        pointHoverBackgroundColor: "rgba(255,255,255,1)",
                        pointBorderWidth: 2,
                        pointHoverRadius: 7,
                        pointHoverBorderWidth: 1
                    }
                ],
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [
                            {
                                gridLines: {
                                    display: false,
                                },
                                ticks: {
                                    fontColor: "#8a909d", // this here
                                },
                            }
                        ],
                        yAxes: [
                            {
                                gridLines: {
                                    fontColor: "#8a909d",
                                    fontFamily: "Roboto, sans-serif",
                                    display: true,
                                    color: "#eee",
                                    zeroLineColor: "#eee"
                                },
                                ticks: {
                                    // callback: function(tick, index, array) {
                                    //   return (index % 2) ? "" : tick;
                                    // }
                                    stepSize: 50,
                                    fontColor: "#8a909d",
                                    fontFamily: "Roboto, sans-serif"
                                }
                            }
                        ]
                    },
                    tooltips: {
                        mode: "index",
                        intersect: false,
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

                }
            },
            statistics: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                datasets: [
                    {
                        label: "Old",
                        pointRadius: 4,
                        pointBackgroundColor: "rgba(255,255,255,1)",
                        pointBorderWidth: 2,
                        fill: true,
                        lineTension: 0,
                        backgroundColor: "rgba(66,208,163,0.2)",
                        borderWidth: 2.5,
                        borderColor: "#42d0a3",
                        data: [10000, 17500, 2000, 11000, 19000, 10500, 18000]
                    },
                    {
                        label: "New",
                        pointRadius: 4,
                        pointBackgroundColor: "rgba(255,255,255,1)",
                        pointBorderWidth: 2,
                        fill: true,
                        lineTension: 0,
                        backgroundColor: "rgba(76,132,255,0.2)",
                        borderWidth: 2.5,
                        borderColor: "#4c84ff",
                        data: [2000, 11500, 10000, 14000, 11000, 16800, 14500]
                    }
                ],
                options: {
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [
                            {
                                gridLines: {
                                    drawBorder: true,
                                    display: false
                                },
                                ticks: {
                                    display: true, // hide main x-axis line
                                    beginAtZero: true,
                                    fontFamily: "Roboto, sans-serif",
                                    fontColor: "#8a909d"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                gridLines: {
                                    drawBorder: true, // hide main y-axis line
                                    display: true
                                }
                            }
                        ],
                        stepSize: 5000,
                        fontColor: "#8a909d",
                        fontFamily: "Roboto, sans-serif",
                        beginAtZero: true,
                        tooltips: {
                            enabled: true
                        }
                    }
                }
            }


        }
    }
    render() {

        return (
            <div className="row">
                <div className="col-12">
                    <div className="card card-default">
                        <div className="card-header justify-content-center">
                            <h2 className="text-center">Bar Chart</h2>
                        </div>
                        <div className="card-body" style={{
                            "height": "300px"
                        }}>
                            <Barchart data={this.state.barchart} height={200} />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="card card-default">
                        <div className="card-header justify-content-center">
                            <h2 className="text-center">Product Line Chart</h2>
                        </div>
                        <div className="card-body" style={{ "height": "380px" }}>
                            <Linechart data={this.state.productchart} height={200} />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="card card-default">
                        <div className="card-header justify-content-center">
                            <h2 className="text-center">Multiple Statistics</h2>
                        </div>
                        <div className="card-body" style={{ "height": "380px" }}>
                            <Linechart data={this.state.statistics} height={200} />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Nextcharts;