import React, { Component } from 'react';
import Linechart from '../charts/linechart';
class Saleoftheyear extends Component {

    constructor() {

        super();
        this.state = {

            data: {
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
                            }]
                    }
                },
                details: {

                    title: "Sales Of The Year",
                    orders: "6308",
                    revenue: "70506"
                }
            }
        }

    }

    render() {
        return (
            <div className="col-xl-8 col-md-12">
                <div className="card card-default" data-scroll-height="675">
                    <div className="card-header">
                        <h2>{this.state.data.details.title}</h2>
                    </div>
                    <div className="card-body">
                        <Linechart
                            data={this.state.data}
                            height={380}
                        />
                    </div>
                    <div className="card-footer d-flex flex-wrap bg-white p-0">
                        <div className="col-6 px-0">
                            <div className="text-center p-4">
                                <h4>{this.state.data.details.orders}</h4>
                                <p className="mt-2">Total orders of this year</p>
                            </div>
                        </div>
                        <div className="col-6 px-0">
                            <div className="text-center p-4 border-left">
                                <h4>{this.state.data.details.revenue}</h4>
                                <p className="mt-2">Total revenue of this year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Saleoftheyear;