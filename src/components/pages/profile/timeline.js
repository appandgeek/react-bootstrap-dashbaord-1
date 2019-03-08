import React from 'react';

const timeline = (props) => {

    return (

        <div className="tab-pane fade show active" id="profile#timeline" role="tabpanel"
            aria-labelledby="timeline-tab">
            {props.timeline.map((data, index) =>
                <div className="media mt-5 profile-timeline-media" key={index}>
                    <div className="align-self-start iconbox-45 overflow-hidden mr-3">
                        <img src={data.avatar} alt="Generic placeholder" />
                    </div>
                    <div className="media-body" style={{ 'textAlign': 'left' }}>
                        <h6 className="mt-0 text-dark">{data.name}</h6>
                        <span>{data.profession}</span>
                        <span className="float-right">{data.posted_on}</span>
                        <p>{data.content}</p>
                        {data.images.map((img, index) =>
                            <div className="d-inline-block rounded overflow-hidden mt-4 mr-0 mr-lg-4" key={index}>
                                <img src={img.src} alt="Product" />
                            </div>
                        )}


                    </div>
                </div>
            )}
        </div>
    );
}

export default timeline;