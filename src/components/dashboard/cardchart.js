import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import CurrencyFormat from "react-currency-format";

class Cardchart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className="col-xl-3 col-sm-6" style={{ 'textAlign': 'left' }}>
                <div className="card card-mini mb-4">
                    <div className="card-body">
                        <h2 className="mb-1">
                            <CurrencyFormat
                                value={this.props.data.datachart.details.value}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={""}
                            />
                        </h2>
                        <p>{this.props.data.datachart.details.title}</p>

                        <div className="chartjs-wrapper">
                            {this.props.data.datachart.details.type === "Bar" ?
                                <Bar
                                    data={this.props.data.datachart}
                                    options={{
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
                                    }}
                                /> :

                                this.props.data.datachart.details.type === "Line" ?
                                    <Line
                                        data={this.props.data.datachart}
                                        options={{
                                            responsive: true,
                                            maintainAspectRatio: false,
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
                                        }}
                                    /> : null
                            }
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Cardchart;