import React, { useContext } from 'react';
import { ComposentContext } from './Chart.js';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar } from 'recharts';

function ChartChild () {

    const data = useContext(ComposentContext);

    return (
        <>

            <LineChart
                width={800}
                height={400}
                data={data}
                margin={{
                    top: 5,
                    right: 25,
                    left: 25,
                    bottom: 5,
                }}
            >
                
                <CartesianGrid strokeDasharray="5 5" />

                <XAxis dataKey="name"/>

                <YAxis/>

                <Line type="monotone" dataKey='dataValue' stroke="#61dafb"/>

            </LineChart>

            <BarChart width={800} height={400} data={data}>
                <Bar dataKey='dataValue' fill="#61dafb" />
            </BarChart>

        </>
    );

}

export default ChartChild;