import React from 'react';
import { Radar } from 'react-chartjs-2';
const radarchart = (props) => {

    return (
        <div>
            <Radar
                data={props.data}
                height={280}
                options={props.data.options}
            />
        </div>
    );
}

export default radarchart;
