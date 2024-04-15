import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import DoughnutChart from '../components/doughnutChart';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const MtdRevenue = () => {
    return (
        <>

            <div
                style={{
                    width: '100%',
                    display: 'block',
                    // backgroundColor: 'orange'
                }}
            >       {/* Main Div */}


                <div
                    style={{
                        backgroundColor: '#E10074',
                        border: '1px solid black',
                        width: '100%',

                    }}
                >{/* Heading Div */}

                    <Typography variant="subtitle1" color='#FFFFFF' sx={{ textAlign: 'center' }} >
                        MTD REVENUE PERFORMANCE
                    </Typography>

                </div> {/*Heading */}

                <div
                style={{
                    width: '100%',
                    // backgroundColor:'blue',
                    display: 'flex',
                    height:'100px',
                    }}
                >{/*hori*/}

                    <div    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent:'center',
                        border: '1px solid black',
                        paddingTop:'3px',
                        paddingBottom:'3px'
                        // paddingLeft:'20px'
                  }}
                    >
                    <DoughnutChart />
                    
                    </div>

                    <div    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent:'center',
                        border: '1px solid black',
                        paddingTop:'3px',
                        paddingBottom:'3px'

                        // paddingLeft:'20px'
                  }}
                    >
                    <DoughnutChart />
                    
                    </div>

                </div>{/*hori*/}

                {/* <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        height: '80px',
                        border: '1px solid black',
                        

                    }}>Main Div */}

                {/* <div style={{
                        width: '100%',
                        marginLeft: '10px',
                        marginRight: '10px',
                        
                        }}
                    > */}

                {/* </div> */}

                {/* <div style={{
                        width: '100%',
                        border: '1px solid black',

                        }}
                      > */}
                {/* </div> */}
            </div>
            {/* </div> */}
            {/*will contain two }
                      <div>
                            <DoughnutChart />

                            

                    <Card sx={{ border: '1px solid ', width: '100%', justifyContent: 'center', borderRadius: 0 }}>
                            <DoughnutChart />
                      </div>


                </div>


            </div> {/* total box units */}
        </>
    );

}
export default MtdRevenue;