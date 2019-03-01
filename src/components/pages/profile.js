import React, { Component } from 'react';
import Timeline from './profile/timeline';
import Tabprofile from './profile/tabprofile';
import Usersettings from './profile/usersettings';
import Userdetails from './profile/userdetails';

class Profile extends Component {

    constructor() {

        super();
        this.state = {
            basic_details: {
                'name': 'Albrecht Straub',
                'email': 'Albrecht.str@gmail.com',
                'friends': 1503,
                'followers': 2905,
                'following': 1200
            },
            contact_details: {

                'email': 'Albrecht.straub@gmail.com',
                'phone_no': '+99 9539 2641 31',
                'birthday': 'Nov 15, 1990'
            },

            user_timeline: [
                {
                    'name': 'Larisa Gabehrt', 'profession': 'Designer', 'posted_on': '5 mins ago', 'avatar': 'assets/img/user/u3.jpg',
                    'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.',
                    'images': [
                        { 'src': 'assets/img/products/pa1.jpg' },
                        { 'src': 'assets/img/products/pa2.jpg' },
                        { 'src': 'assets/img/products/pa3.jpg' },
                    ]
                },
                {
                    'name': 'Walter Reuter', 'profession': 'Designer', 'posted_on': '2 hrs ago', 'avatar': 'assets/img/user/u4.jpg',
                    'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.',
                    'images': [

                    ]
                },
                {
                    'name': 'Albert straub', 'profession': 'Designer', 'posted_on': '5 days ago', 'avatar': 'assets/img/user/u5.jpg',
                    'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.',
                    'images': [
                        { 'src': 'assets/img/products/pa4.jpg' }

                    ]
                }
            ],

            showTimeline: true,
            showProfile: false,
            showSettings: false
        }

        this.handleTimeline = this.handleTimeline.bind(this);
        this.handleProfile = this.handleProfile.bind(this);
        this.handleSettings = this.handleSettings.bind(this);
    }

    handleTimeline() {
        this.setState({
            showTimeline: true,
            showProfile: false,
            showSettings: false
        });
    }

    handleProfile() {
        this.setState({
            showProfile: true,
            showSettings: false,
            showTimeline: false
        });
    }

    handleSettings() {
        this.setState({
            showSettings: true,
            showTimeline: false,
            showProfile: false
        });
    }

    render() {
        return (
            <div className="content">
                <div className="bg-white border rounded">
                    <div className="row no-gutters">
                        <Userdetails basic_details={this.state.basic_details} contact_details={this.state.contact_details} />


                        <div className="col-lg-8 col-xl-9">
                            <div className="profile-content-right py-5">
                                <ul className="nav nav-tabs px-3 px-xl-5 nav-style-border" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className={this.state.showTimeline ? "nav-link active" : "nav-link"} id="timeline-tab" data-toggle="tab" href="#timeline" role="tab"
                                            aria-controls="timeline" aria-selected="true" onClick={this.handleTimeline}>Timeline</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={this.state.showProfile ? "nav-link active" : "nav-link"} id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                                            aria-controls="profile" aria-selected="false" onClick={this.handleProfile}>Profile</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={this.state.showSettings ? "nav-link active" : "nav-link"} id="settings-tab" data-toggle="tab" href="#settings" role="tab"
                                            aria-controls="settings" aria-selected="false" onClick={this.handleSettings}>Settings</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content px-3 px-xl-5" id="myTabContent">
                                {this.state.showTimeline ?
                                    <Timeline timeline={this.state.user_timeline} /> : this.state.showProfile ?
                                        <Tabprofile /> :
                                        this.state.showSettings ?
                                            <Usersettings /> : null}
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}

export default Profile;