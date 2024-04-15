import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card1 from './card1';

const Table3 = () => {
    return (
        <>
       
    <Box>          {/* total box units */}

                <div
                    style={({
                        backgroundColor: '#000000'
                    })}
                >
                    <Typography variant="h6" color='#FFFFFF' sx={{ fontWeight: 'bold',textAlign: 'center' }} >
                        NEXT DAY BUDGET GOALS
                    </Typography>
                </div> {/*Heading */}
            <Stack direction="row" >
            
            <Card1 title="Gross Profit" value={164} />
            <Card1 title="Accessories" value={115} />
            <Card1 title="Total Acts" value={661} />
            
            
            </Stack>
            <Stack direction="row" >
            <Card1 title="Voice Acts" value={451} />
            <Card1 title="BTS" value={210} />
            <Card1 title="Upgrades" value={348} />
            </Stack>


            </Box> {/* total box units */}
        </>
    );

}
export default Table3;