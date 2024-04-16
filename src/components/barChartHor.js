import React from 'react';
import Typography from '@mui/material/Typography';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';



const BarChartHor = () => {

  ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    // Legend
  );
  const data = {
    labels: ['Washington DC', 'New Jersey', 'Memphis', 'New England'
      , 'Houston North', 'SD South', 'Mohave', 'Knoxville',
      'Los Angeles', 'Austin South', 'Alabama', 'Central Coast',
      'SD North', 'Houston West', 'Houston East', 'NorCal',
      'Nashville', 'SD Central', 'LA North', 'Austin Central',
      'Philadelphia'],
    datasets: [
      {

        // label: '369',
        data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20,
          0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20,
          0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20,],
        backgroundColor: '#E10074',
        borderColor: 'black',
        borderWidth: 1,


      }
    ]

  }

  const options = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  };
  return (
    <div
      style={{
        width: '100%',
        height: '350px',
        // Set the height to take the full height of the viewport
        //   backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'column', // Ensure child elements stack vertically
        border: '1px solid black',
        overflow: 'auto',
      }}
    >
      <div
        style={{
          width: '100%',
          backgroundColor: '#000000',
        }}
      >
        <Typography variant="h6" color='#FFFFFF' sx={{ fontWeight: 'bold', textAlign: 'center' }} >
          DAILY GOALS REVENUE
        </Typography>
      </div>
      <div
        style={{
          width: '100%',
          height: '100%',
          overflow: 'auto',

        }}>

        <Bar
          data={data}
          options={options}

        >

        </Bar>
      </div>
    </div>

  )
}
export default BarChartHor;