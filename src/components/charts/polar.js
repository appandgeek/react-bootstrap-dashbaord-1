import React from 'react';
import { Polar } from 'react-chartjs-2';
const polarchart = (props) => {

    return (
        <div>
            <Polar
                data={props.data}
                height={props.height}
                options={props.data.options}
            />
        </div>
    );
}

export default polarchart;