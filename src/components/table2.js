import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card1 from './card1';

const Table2 = () => {
    return (
        <>
            <div
                style={{
                    width: '100%',
                    margin:0
                }}
            >


                <div
                    style={{
                        backgroundColor: '#000000',
                        display: 'block'
                    }}
                >
                    <Typography variant="subtitle1" color='#FFFFFF' sx={{ textAlign: 'center',fontWeight:'bold' }} >
                        TODAY'S SALES
                    </Typography>
                </div> {/*Heading */}
                
                <div style={{
                    display: 'flex',
                    width: '100%'
                }}>

                    <Card1 title="Accessories GP" value={376} />
                    <Card1 title="Feature Revenue" value={24} />
                    <Card1 title="Total Revenue" value={318} />
                </div>
                <div style={{
                    display: 'flex',
                    width: '100%'
                }}>
                    <Card1 title="Accessories Count" value={210} />
                    <Card1 title="Feature Count" value={25} />
                    <Card1 title="Daily Goal" value={25} />
                </div>

            </div>

        </>
    );

}
export default Table2;