import React from 'react';
import verge_icon from '../img/verge_icon.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const nextDayBudget = () => {
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                margin: '0px',
                height: '100px'
            }}
        >  {/* TOP DIV */}
            <div
                style={{
                    width: '40px',
                    marginRight: '1px',
                    // backgroundColor:'black',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: '10px'
                }}
            >
                <div
                    style={{
                        backgroundImage: `url(${verge_icon})`,
                        backgroundSize: 'cover',
                        justifyContent: 'center',
                        // backgroundColor:'grey',
                        height: '40px',
                        width: '40px',
                        margin: 0,
                        marginTop: '1px'


                    }}
                >


                </div>
            </div>{/* LEFT DIV */}
            <div
                style={{
                    // backgroundColor: '#000000',
                    width: '100%',
                    padding: 0,
                    backgroundColor: 'yellow',
                    display: 'flex'
                }}
            >{/* RIGHT DIV */}

                <div
                    style={{
                        // backgroundColor: '#000000',
                        width: '100%',
                        padding: '2px',
                        margin: '2px',
                        border: '1px solid black'
                    }}
                >
                    <Typography variant="subtitle1" color='#E10074' sx={{
                        fontWeight: 'bold', textAlign: 'center', width: '100%',
                        margin: 0
                    }} m={1}>
                        NEXT DAY BUDGET GOALS
                    </Typography>
                </div>
                <div
                    style={{
                        width: '80%',
                        margin: '2px',
                        border: '1px solid black'
                        ,backgroundColor: '#000000'
                    }}>
                    <Typography variant="subtitle1" color='#FFFFFF' sx={{
                        textAlign: 'center', width: '100%',
                        margin: 0
                    }} m={1}>
                        Gross Profit
                    </Typography>
                    <div>
                        <Typography variant="h6" color='#E10074' sx={{
                            fontWeight: 'bold', textAlign: 'center', width: '100%',
                            margin: 0
                        }} m={1}>
                            $164.519
                        </Typography>

                    </div>
                </div>
                <div
                    style={{
                        width: '80%',
                        margin: '2px',
                        border: '1px solid black'
                        ,backgroundColor: '#000000'
                    }}>
                    <Typography variant="subtitle1" color='#FFFFFF' sx={{
                        textAlign: 'center', width: '100%',
                        margin: 0
                    }} m={1}>
                        Accessories
                    </Typography>
                    <div>
                        <Typography variant="h6" color='#E10074' sx={{
                            fontWeight: 'bold', textAlign: 'center', width: '100%',
                            margin: 0
                        }} m={1}>
                            $11.532
                        </Typography>

                    </div>
                </div>

                <div
                    style={{
                        width: '80%',
                        margin: '2px',
                        border: '1px solid black'
                        ,backgroundColor: '#000000'
                    }}>
                    <Typography variant="subtitle1" color='#FFFFFF' sx={{
                        textAlign: 'center', width: '100%',
                        margin: 0
                    }} m={1}>
                        Total Acts
                    </Typography>
                    <div>
                        <Typography variant="h6" color='#E10074' sx={{
                            fontWeight: 'bold', textAlign: 'center', width: '100%',
                            margin: 0
                        }} m={1}>
                            661
                        </Typography>

                    </div>
                </div>
                <div
                    style={{
                        width: '80%',
                        margin: '2px',
                        border: '1px solid black'
                        ,backgroundColor: '#000000'
                    }}>
                    <Typography variant="subtitle1" color='#FFFFFF' sx={{
                        textAlign: 'center', width: '100%',
                        margin: 0
                    }} m={1}>
                        Voice Acts
                    </Typography>
                    <div>
                        <Typography variant="h6" color='#E10074' sx={{
                            fontWeight: 'bold', textAlign: 'center', width: '100%',
                            margin: 0
                        }} m={1}>
                            451
                        </Typography>

                    </div>
                </div>
                <div
                    style={{
                        width: '80%',
                        margin: '2px',
                        border: '1px solid black'
                        ,backgroundColor: '#000000'
                    }}>
                    <Typography variant="subtitle1" color='#FFFFFF' sx={{
                        textAlign: 'center', width: '100%',
                        margin: 0
                    }} m={1}>
                        BTS
                    </Typography>
                    <div>
                        <Typography variant="h6" color='#E10074' sx={{
                            fontWeight: 'bold', textAlign: 'center', width: '100%',
                            margin: 0
                        }} m={1}>
                            210
                        </Typography>

                    </div>
                </div>
                <div
                    style={{
                        width: '80%',
                        margin: '2px',
                        border: '1px solid black'
                        ,backgroundColor: '#000000'
                    }}>
                    <Typography variant="subtitle1" color='#FFFFFF' sx={{
                        textAlign: 'center', width: '100%',
                        margin: 0
                    }} m={1}>
                        Upgrades
                    </Typography>
                    <div>
                        <Typography variant="h6" color='#E10074' sx={{
                            fontWeight: 'bold', textAlign: 'center', width: '100%',
                            margin: 0
                        }} m={1}>
                            348
                        </Typography>

                    </div>
                </div>

            </div> {/* RIGHT DIV */}


        </div>
    );
    //'#e91e63'
}
export default nextDayBudget;