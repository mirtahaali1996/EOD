import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';
// Tooltip, Legend

const DoughnutChart = () => {

    ChartJS.register(
        ArcElement,
        // Tooltip,
        // Legend
    );
    const data = {

        labels: ['Show', 'Hide'],
        datasets: [
            {
                labels: 'Shop 1',
                data: [3, 6],
                backgroundColor: ['#E10074', '#E4E5E7'],
                borderColor: ['#E10074', '#E4E5E7'],
                cutout: '80%',
                circumference: 180,
                rotation: 270

            }
        ]
    }
    const options = {
        aspectRatio: 2,
    }


    const doughnutPointer = {
        id: 'doughnutPointer',
        afterDatasetsDraw(chart, args, plugins) {
            const { ctx, data } = chart;
           
            const centerX = chart.getDatasetMeta(0).data[0].x;
            const centerY = chart.getDatasetMeta(0).data[0].y;

            function sumArray(arr) {
                return arr.reduce((acc, current) => acc + current, 0);
            }

            const dataPointArray = data.datasets[0].data.map((datapoint, index) => {
                return datapoint
            })
            const totalsum = sumArray(dataPointArray);
            const datapointPercentage = (6 / totalsum * 100).toFixed(3);
            ctx.font = ' 20px sans-serif';
            ctx.fillStyle = '#E10074';

            const textX = centerX - 30; // Adjust this value to move the text left or right
const textY = centerY;

ctx.fillText(datapointPercentage, textX, textY);

            // ctx.fillText(datapointPercentage,centerX,centerY);

            // console.log(datapointPercentage);
        }
    }

    return (


        <>
            <Doughnut
                data={data}
                options={options}
                plugins={[doughnutPointer]}
            >
            </Doughnut>



        </>
    );

}
export default DoughnutChart;