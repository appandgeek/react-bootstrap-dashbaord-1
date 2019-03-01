import React from 'react';
import { Line } from 'react-chartjs-2';
const linechart = (props) => {

    return (
        <div>
            <Line
                data={props.data}
                height={props.height}
                options={props.data.options}
            />
        </div>
    );
}

export default linechart;