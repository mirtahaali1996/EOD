import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card1 from './card1';
import verge_icon from '../img/verge_icon.png';
import Eod_overview from '../components/eod_overview';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Table1 = () => {
    return (
        <>

            <div
                style={{
                    width: '100%',
                    height: '100%',
                    margin:0
                   
                }}
            >         

                <div
                    style={{
                        backgroundColor: '#000000',
                        display:'block',
                        
                    }}
                >
                    <Typography variant="subtitle1" color='#FFFFFF' sx={{ textAlign: 'center'  }} >
                        TOTAL BOX UNITS (TODAY)
                    </Typography>
                </div>
             

                <div style={{
                    width: '100%',
                    display: 'flex',
                    
                    // backgroundColor: 'pink',
                  
                  
                }}>

                    <Card1 title="Consumer Voice" value={376} />
                    <Card1 title="TFB Voice" value={24} />
                    <Card1 title="Upgrades" value={318} />
                    <Card1 title="Migrations" value={1} />
                    <Card1 title="Prepaid" value={46} />
                </div>
                {/* </Stack> */}
                {/* <Stack direction="row" > */}
                <div style={{
                    display: 'flex',
                    width: '100%'
                }}>
                    <Card1 title="Consumer Core BTS" value={210} />
                    <Card1 title="TFB BTS" value={25} />
                    <Card1 title="Consumer TMI" value={25} />
                    <Card1 />
                    <Card1 />

                    {/* <Card sx={{ width: 161, height: 50, border: '1px solid ', borderRadius: 0 }}>
                        <CardContent >
                            <div style={{ position: 'relative' }}>
                                {/* This is my top div }
                                <div style={{ position: 'absolute', top: -16, left: 42 }}>
                                    <Typography style={{ color: '#E10074', fontWeight: 'bold', fontSize: '10px', paddingTop: '1px' }}>
                                        {'TFB TMI'}
                                    </Typography>
                                </div>

                                <div style={{ position: 'absolute', top: 18, left: '50%', transform: 'translateX(-50%)' }}>
                                    <Typography variant="h5" style={{ fontSize: '10px', fontWeight: 'bold' }}>
                                        {25}
                                    </Typography>
                                </div>
                            </div>



                        </CardContent>

                    </Card> */}
                </div>
                {/* </Stack> */}


            </div> {/* total box units */}
        </>
    );

}
export default Table1;