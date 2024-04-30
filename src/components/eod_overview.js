import React from 'react';
import verge_icon from '../img/verge_icon.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const eod_overview = () => {
  return (
    <div
      style={{
        backgroundColor:'white',
        width: '100%',
        display: 'flex',
        margin: '0px',
        alignItems:'center'
      }}
    >  {/* TOP DIV */}
<div
 style={{

width:'40px',
marginRight:'1px',
// backgroundColor:'black',
justifyContent:'center',
paddingLeft:'10px',
paddingRight:'5px'
 }}
 >
      <div
        style={{
          backgroundImage: `url(${verge_icon})`,
          backgroundSize: 'cover',
          justifyContent: 'center',
          // backgroundColor:'grey',
          height:'34px',
          width:'34px',
          margin:0,
          marginTop:'1px'
          

        }}
      >


      </div>
      </div>{/* LEFT DIV */}
      <div
        style={{
          border:'2px solid black',
          width: '100%',
          paddingRight: '0px',
          // height: '100%'
        }}
      >{/* RIGHT DIV */}

        <Typography variant="h4" color='#E10074' sx={{
          display:'flex',alignItems:'center',justifyContent:'center',
          fontWeight: 'bold', backgroundColor: '#000000',width: '100%',
          margin: 0,height:'50px'
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