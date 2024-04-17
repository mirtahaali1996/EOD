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
                    // backgroundColor: 'orange',
                }}
            >       {/* Main Div */}


                <div
                    style={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        backgroundColor: '#E10074',
                        border: '1px solid black',
                        width: '100%',
                        height:'35px',
                        
                    }}
                >{/* Heading Div */}

                    <Typography variant="subtitle1" color='#FFFFFF' sx={{ textAlign: 'center',fontWeight:'bold' }} >
                        MTD REVENUE PERFORMANCE
                    </Typography>

                </div> {/*Heading */}

                <div
                style={{
                    width: '100%',
                    contain:'content',  
                    // backgroundColor:'blue',
                    display:'flex',
                    flexWrap:'wrap',
                    height:'180px',
                    }}
                >{/*hori*/}

                    <div    style={{
                        // width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent:'center',
                        borderLeft: '1px solid black',
                        borderBottom: '1px solid black',                       
                        padding:'11px 0px',
                        contain:'content'
                  }}
                    >
                    <div style={{padding:'0px 35px'}}>
                    <DoughnutChart />
                    </div>
                    </div>

                    <div    style={{
                        // width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent:'center',
                        borderLeft: '0.5px solid black',
                        borderRight: '1px solid black',
                        borderBottom: '1px solid black',
                        padding:'11px 0px',
                        // paddingLeft:'20px'
                  }}
                    >
                  <div style={{padding:'0px 35px'}}>
                    <DoughnutChart />
                    </div>
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