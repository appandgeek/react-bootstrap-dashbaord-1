import React, { Component } from 'react';
import Sidebar from "./sidebar";
import Header from './header';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import Profile from '../pages/profile';
import Signin from '../pages/auth/signin';
import Signup from '../pages/auth/signup';
import Invoice from '../pages/others/invoice';
import Errors from '../pages/others/errors';
import Charts from '../charts/charts';

class Main extends Component {

    render() {
        const currentPath = window.location.pathname;

        return (

            <div className={currentPath.includes('signup') || currentPath.includes('signin') ? "" : "wrapper"}>
                {currentPath.includes('signup') || currentPath.includes('signin') ? null : <Sidebar />}

                <div className={currentPath.includes('signup') || currentPath.includes('signin') ? "" : "page-wrapper"}>
                    {currentPath.includes('signup') || currentPath.includes('signin') ? null : <Header />}

                    <div className="content-wrapper">

                        <Switch>
                            <Route exact path='/' component={Dashboard} />
                            <Route exact path='/profile' component={Profile} />
                            <Route exact path='/signin' component={Signin} />
                            <Route exact path="/signup" component={Signup} />
                            <Route exact path="/invoice" component={Invoice} />
                            <Route exact path="/error" component={Errors} />
                            <Route exact path="/charts" component={Charts} />
                        </Switch>

                    </div>
                </div>
            </div>


        );
    }
}

export default Main;