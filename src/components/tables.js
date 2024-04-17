import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card1 from './card1';
import verge_icon from '../img/verge_icon.png';
import Eod_overview from '../components/eod_overview';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



const Tables = () => {
    return (
        <><div style={{
            width: '100%',
            // border: '1px solid black',
            display: 'flex'

        }}>
            <div
                style={{
                    width: '100%',
                    height:'100%',
                    border: '1px solid black'
                }}> {/* Next Day Budget goals */}
                <div
                    style={{
                        backgroundColor: '#000000',
                        // border: '1px solid black',
                        width: '100%',

                    }}
                >{/* Heading Div */}

                    <Typography variant="subtitle1" color='#FFFFFF' sx={{ fontWeight:'bold',textAlign: 'center' }} >
                        NEXT DAY BUDGET GOALS
                    </Typography>

                </div>
                <div style={{
                    width: '100%'
                }}>
                    <div style={{
                        width: '100%',
                        display: 'flex',
                    }}>
                        <Card1 title="Consumer Voice" value={376} />
                        <Card1 title="TFB Voice" value={24} />
                        <Card1 title="Upgrades" value={318} />
                    </div>
                    <div style={{
                        display: 'flex',
                        width: '100%'
                    }}>
                        <Card1 title="Consumer Core BTS" value={210} />
                        <Card1 title="TFB BTS" value={25} />
                        <Card1 title="Consumer TMI" value={25} />

                    </div>
                </div> {/* Center Div */}
            </div> {/* Next Day Budget goals */}
            <div
                style={{
                    width: '100%',
                    border: '1px solid black',
                    marginLeft: '2px'
                }}> {/* Month to date */}
                <div
                    style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid black',
                        // borderRight:'none',
                        width: '100%',
                        height:'28px'
                    }}
                >{/* Heading Div */}

                    <Typography variant="subtitle1" color='#000000' sx={{ textAlign: 'center', fontWeight: 'bold',fontSize:'12px' }} >
                        MONTH-TO-DATE PERFORMANCE
                    </Typography>

                </div>
                <div style={{
                    width: '100%'
                }}>
                    <div style={{
                        width: '100%',
                        display: 'flex',
                    }}>

                        <Card1 title="Consumer Voice" value={376} />
                        <Card1 title="TFB Voice" value={24} />
                        <Card1 title="Upgrades" value={318} />
                    </div>
                    <div style={{
                        display: 'flex',
                        width: '100%'
                    }}>
                        <Card1 title="Consumer Core BTS" value={210} />
                        <Card1 title="TFB BTS" value={25} />
                        <Card1 title="Consumer TMI" value={25} />

                    </div>
                </div> {/* Center Div */}
            </div> {/* Month to date */}



            <div
                style={{
                    width: '100%',
                    border: '1px solid black',
                    marginLeft: '2px'
                }}> {/* DATA THROUGH */}
                <div
                    style={{
                        backgroundColor: '#000000',
                        border: '1px solid black',
                        width: '100%'
                    }}
                >{/* Heading Div */}

                    <Typography variant="subtitle1" color='#FFFFFF' sx={{ textAlign: 'center', }} >
                        DATA THROUGH
                    </Typography>

                </div>

                <div style={{
                    width: '100%',
                    height:'70%',
                    display: 'block',
                    padding:'5px',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    flexDirection:'column'
                }}>
                      <div>
                      <Typography variant="subtitle1" color='#000000' sx={{ textAlign: 'center', fontWeight:'bold' }} >
                        2/14/2024
                    </Typography>
                    </div>
                      <div>
                      <Typography variant="subtitle1" color='#000000' sx={{ textAlign: 'center', fontWeight:'bold'}} >
                        12:00:00 AM
                    </Typography>
                    </div>

                </div> {/* Center Div */}
            </div> {/* DATA THROUGH */}

        </div>
        </>

    )
}
export default Tables;