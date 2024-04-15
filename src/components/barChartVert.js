import React from 'react';
import Typography from '@mui/material/Typography';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';



const BarChartVert = () => {

    ChartJS.register(
        BarElement,
        CategoryScale,
        LinearScale,
        Tooltip,
        // Legend
    );
    const data = {
        labels: ['NorthEast', 'West', 'South'],
        datasets: [
            {

                // label: '369',
                data: [6, 4,3.8],
                backgroundColor:'#FFFFFF',
                borderColor: 'black',
                borderWidth: 1,
                barPercentage: 0.6, // Adjust this value to control the width of the bars
                categoryPercentage: 0.6,

            }
        ]

    }

    const options = {
        scales: {
            y: {
                beginAtZero: true,

            },
            y: {
                grid: {
                    color: 'rgb(157, 155, 155)'
                }
            }

        },
    };
    return (
        <div
            style={{
                width: '100%',
                backgroundColor: 'purple',
                justifyContent: 'center',
                display: 'block',
            }}

        >{/*Main Div */}
            <div
                style={{
                    width: '100%',
                    backgroundColor: '#E10074',
                    display: 'block'
                }}
            >
                <Typography variant="subtitle1" color='#FFFFFF' sx={{ textAlign: 'center' }} >
                    DAILY GOALS PERFORMANCE BY REGION
                </Typography>
            </div>{/*Heading Div */}

            <div
                style={{
                    width: '100%',
                    backgroundColor: '#000000',
                    height:'200px',
                    display:'flex',
                }}>{/*Bar Div */}

                <Bar
                    data={data}
                    options={{
            ...options,
            maintainAspectRatio: false, // Add this line to allow the Bar to fill the entire div
        }}>
                </Bar>
            </div>
        </div>

    )
}
export default BarChartVert;