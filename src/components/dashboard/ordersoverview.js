import React, { Component } from 'react';
import Dounut from '../charts/doughnut';
class Ordersoverview extends Component {

    constructor() {
        super();
        this.state = {
            data: {
                labels: ["completed", "unpaid", "pending", "canceled"],
                datasets: [
                    {
                        label: ["completed", "unpaid", "pending", "canceled"],
                        data: [4100, 2500, 1800, 2300],
                        backgroundColor: ["#4c84ff", "#29cc97", "#8061ef", "#fec402"],
                        borderWidth: 1
                        // borderColor: ['#4c84ff','#29cc97','#8061ef','#fec402']
                        // hoverBorderColor: ['#4c84ff', '#29cc97', '#8061ef', '#fec402']
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
                    bodyFontSize: 14,
                    backgroundColor: "rgba(256,256,256,0.95)",
                    displayColors: true,
                    borderColor: "rgba(220, 220, 220, 0.9)",
                    borderWidth: 2

                }
            }
        }
    }



    render() {
        return (
            <div className="col-xl-4 col-md-12">

                <div className="card card-default" data-scroll-height="675">
                    <div className="card-header justify-content-center">
                        <h2>Orders Overview</h2>
                    </div>
                    <div className="card-body" >
                        <Dounut
                            data={this.state.data}
                            height={265}
                        />
                    </div>
                    <a href="#" className="pb-5 d-block text-center text-muted"><i className="mdi mdi-download mr-2"></i> Download overall report</a>
                    <div className="card-footer d-flex flex-wrap bg-white p-0">
                        <div className="col-6">
                            <div className="py-4 px-4">
                                <ul className="d-flex flex-column justify-content-between">
                                    <li className="mb-2"><i className="mdi mdi-checkbox-blank-circle-outline mr-2" style={{ "color": "#4c84ff" }}></i>Order Completed</li>
                                    <li><i className="mdi mdi-checkbox-blank-circle-outline mr-2" style={{ "color": "#80e1c1" }} ></i>Order Unpaid</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 border-left">
                            <div className="py-4 px-4 ">
                                <ul className="d-flex flex-column justify-content-between">
                                    <li className="mb-2"><i className="mdi mdi-checkbox-blank-circle-outline mr-2" style={{ "color": "#8061ef" }}></i>Order Pending</li>
                                    <li><i className="mdi mdi-checkbox-blank-circle-outline mr-2" style={{ "color": "#ffa128" }}></i>Order Canceled</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ordersoverview;