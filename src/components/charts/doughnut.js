import React from 'react';
import { Doughnut } from 'react-chartjs-2';
const doughnutchart = (props) => {
    return (
        <div>
            <Doughnut
                data={props.data}
                height={props.height}
                options={props.data.options}
                width={800}
            />
        </div>
    );
}

export default doughnutchart;