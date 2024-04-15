import React from 'react';
import verge_icon from '../img/verge_icon.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const eod_overview = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        margin: '0px'
      }}
    >  {/* TOP DIV */}
<div
 style={{
width:'40px',
marginRight:'1px',
// backgroundColor:'black',
justifyContent:'center',
paddingLeft:'10px'
 }}
 >
      <div
        style={{
          backgroundImage: `url(${verge_icon})`,
          backgroundSize: 'cover',
          justifyContent: 'center',
          // backgroundColor:'grey',
          height:'30px',
          width:'30px',
          margin:0,
          marginTop:'1px'
          

        }}
      >


      </div>
      </div>{/* LEFT DIV */}
      <div
        style={{
          // backgroundColor: '#000000',
          width: '100%',
          padding: 0,
          // height: '100%'
        }}
      >{/* RIGHT DIV */}

        <Typography variant="h6" color='#E10074' sx={{
          fontWeight: 'bold', textAlign: 'center', backgroundColor: '#000000',width: '100%',
          margin: 0
        }} m={1}>
          EOD OVERVIEW
        </Typography>
      </div>
      {/* </Stack> */}
    </div>
  );
  //'#e91e63'
}
export default eod_overview;