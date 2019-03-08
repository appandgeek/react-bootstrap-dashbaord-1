import React from 'react';

const userdetails = (props) => {

    return (
        <div className="col-lg-4 col-xl-3">
            <div className="profile-content-left pt-5 pb-3 px-3 px-xl-5">
                <div className="card text-center widget-profile px-0 border-0">
                    <div className="card-img mx-auto rounded-circle">
                        <img src="assets/img/user/u6.jpg" alt="user avatar" />
                    </div>
                    <div className="card-body">
                        <h4 className="py-2 text-dark">{props.basic_details.name}</h4>
                        <p>{props.basic_details.email}</p>
                        <a className="btn btn-primary btn-pill btn-lg my-4" href="#">Follow</a>
                    </div>
                </div>
                <div className="d-flex justify-content-between ">
                    <div className="text-center pb-4">
                        <h6 className="text-dark pb-2">{props.basic_details.friends}</h6>
                        <p>Friends</p>
                    </div>
                    <div className="text-center pb-4">
                        <h6 className="text-dark pb-2">{props.basic_details.followers}</h6>
                        <p>Followers</p>
                    </div>
                    <div className="text-center pb-4">
                        <h6 className="text-dark pb-2">{props.basic_details.following}</h6>
                        <p>Following</p>
                    </div>
                </div>
                <hr className="w-100" />
                <div className="contact-info pt-4">
                    <h5 className="text-dark mb-1">Contact Information</h5>
                    <p className="text-dark font-weight-medium pt-4 mb-2">Email address</p>
                    <p>{props.contact_details.email}</p>
                    <p className="text-dark font-weight-medium pt-4 mb-2">Phone Number</p>
                    <p>{props.contact_details.phone_no}</p>
                    <p className="text-dark font-weight-medium pt-4 mb-2">Birthday</p>
                    <p>{props.contact_details.birthday}</p>
                    <p className="text-dark font-weight-medium pt-4 mb-2">Social Profile</p>
                    <p className="pb-3 social-button">
                        <a href="#" className="mb-1 btn btn-outline btn-twitter rounded-circle">
                            <i className="mdi mdi-twitter"></i>
                        </a>
                        <a href="#" className="mb-1 btn btn-outline btn-linkedin rounded-circle">
                            <i className="mdi mdi-linkedin"></i>
                        </a>
                        <a href="#" className="mb-1 btn btn-outline btn-facebook rounded-circle">
                            <i className="mdi mdi-facebook"></i>
                        </a>
                        <a href="#" className="mb-1 btn btn-outline btn-skype rounded-circle">
                            <i className="mdi mdi-skype"></i>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default userdetails;