import React from 'react';
import { Bar } from 'react-chartjs-2';
const barchart = (props) => {

    return (
        <div>
            <Bar
                data={props.data}
                height={props.height}
                options={props.data.options}
            />
        </div>
    );
}

export default barchart;