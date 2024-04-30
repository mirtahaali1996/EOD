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
                // borderWidth: 1,
                barPercentage: 0.6, // Adjust this value to control the width of the bars
                categoryPercentage: 0.6,
                
            }
        ]

    }

    // const options = {
    //     scales: {
    //         y: {
    //             beginAtZero: true,

    //         },
    //         y: {
    //             grid: {
    //                 color: 'rgb(157, 155, 155)'
    //             }
    //         }

    //     },
    // };
    const options = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#FFFFFF', // Set y-axis label color to white
                },
                grid: {
                    color: 'rgb(157, 155, 155)'
                }
            },
            x: {
                ticks: {
                    color: '#FFFFFF', // Set x-axis label color to white
                }
            }
        },
    };
    
    return (
        <div
            style={{
                width: '100%',
                height:'100%',
                // backgroundColor: 'purple',
                display: 'block',
            }}

        >{/*Main Div */}
            <div
                    style={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        backgroundColor: '#E10074',
                        borderBottom: '1px solid black',
                        width: '100%',
                        height:'25px',
                        
                    }}
                >{/* Heading Div */}

                    <Typography variant="subtitle1" color='#FFFFFF' sx={{ textAlign: 'center',fontWeight:'bold' }} >
                    DAILY GOALS PERFORMANCE BY REGION
                    </Typography>

                </div> {/*Heading */}

            <div
                style={{
                    borderRight:'1px solid black',
                    width: '100%',
                    backgroundColor: '#000000',
                    height:'294px',
                    display:'flex',
                }}>{/*Bar Div */}

                <Bar
                    data={data}
                    options={{
            ...options,
            // responsive: true,
            maintainAspectRatio: false, // Add this line to allow the Bar to fill the entire div
        }}>
                </Bar>
            </div>
        </div>

    )
}
export default BarChartVert;
