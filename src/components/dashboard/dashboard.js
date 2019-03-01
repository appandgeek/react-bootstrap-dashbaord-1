import React, { Component } from 'react';
import Cardchart from './cardchart';
import Saleoftheyear from './saleoftheyear';
import Ordersoverview from './ordersoverview';
import Salesoverview from './salesoverview';
import Soldbyunits from './soldbyunits';
import Latestnotifications from './latestnotifications';
import Recentorders from './recentorders';
import Todolist from './todolist';
import Worldcustomers from './worldcustomers';
import Newcustomer from './newcustomers';
import Topproducts from './topproducts';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            signups: {

                datachart: {
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
                            label: "signup",
                            data: [5, 6, 4.5, 5.5, 3, 6, 4.5, 6, 8, 3, 5.5, 4],
                            // data: [2, 3.2, 1.8, 2.1, 1.5, 3.5, 4, 2.3, 2.9, 4.5, 1.8, 3.4, 2.8],
                            backgroundColor: "#4c84ff"
                        }
                    ],
                    details: {
                        type: "Bar",
                        title: "Online Signups",
                        value: "71,503"
                    }

                }

            },
            visitors: {
                datachart: {
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
                    details: {
                        type: "Line",
                        title: "New Visitors Today",
                        value: "9,503"
                    }
                }
            },
            order: {
                datachart: {
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
                    details: {
                        type: "Line",
                        title: "Monthly Total Order",
                        value: "71,503"
                    }
                }
            },
            revenue: {

                datachart: {
                    labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
                    datasets: [
                        {
                            label: "Rev",
                            lineTension: 0,
                            pointRadius: 4,
                            pointBackgroundColor: "rgba(255,255,255,1)",
                            pointBorderWidth: 2,
                            fill: true,
                            backgroundColor: "rgba(41,204,151,0.10196)",
                            borderColor: "#29cc97",
                            borderWidth: 2,
                            data: [0, 4, 3, 5.5, 3, 4.7, 1]
                        }
                    ],
                    details: {
                        type: "Line",
                        title: "Total Revenue This year",
                        value: "9,503"
                    }
                }
            }
        }
    }

    render() {

        return (
            <div className="content">
                <div className="row">
                    <Cardchart data={this.state.signups} />
                    <Cardchart data={this.state.visitors} />
                    <Cardchart data={this.state.order} />
                    <Cardchart data={this.state.revenue} />
                </div>
                <div className="row">
                    <Saleoftheyear />
                    <Ordersoverview />
                </div>
                <div className="row">
                    <Salesoverview />
                    <Soldbyunits />
                    <Latestnotifications />
                </div>
                <div className="row">
                    <Recentorders />
                </div>
                <div className="row">
                    <Todolist />
                    <Worldcustomers />
                </div>
                <div className="row">
                    <Newcustomer />
                    <Topproducts />
                </div>
            </div>

        )
    }
}

export default Dashboard;