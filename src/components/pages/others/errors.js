import React from 'react';
import { Link } from 'react-router-dom';

const error = () => {

    return (
        <div className="content">
            <div className="error-wrapper rounded border bg-white px-5">
                <div className="row justify-content-center">
                    <div className="col-xl-4">
                        <h1 className="text-primary bold error-title">404</h1>
                        <p className="pt-4 pb-5 error-subtitle">Looks like something went wrong.</p>
                        <Link to="/" className="btn btn-primary btn-pill">Back to Home</Link>
                    </div>
                    <div className="col-xl-6 pt-5 pt-xl-0 text-center">
                        <img src="assets/img/lightenning.png" className="img-responsive" alt="Error Page Image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default error;