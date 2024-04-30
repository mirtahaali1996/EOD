import React from 'react';
import verge_icon from '../img/verge_icon.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Eod_overview from '../components/eod_overview';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Card1 = ({ title, value }) => {
  return (
    <>
      {/* <div>
style={{
  display:'flex'
}}> */}


      <div
        style={{
          display:'flex',
          justifyContent:'center',
          border: '1px solid black',
          position: 'relative',
          textAlign:'center',
          height:'55px',
          width:'100%',
          backgroundColor:'white'
        }}
      >
        <div style={{
          // backgroundColor:'orange',
          display: 'flex',
          // paddingTop:'1px',
          paddingRight:'7px',
          paddingLeft:'7px',
          justifyContent:'center',
          textAlign:'center',
        }}>{/*Title DIv*/}
          <Typography style={{
            color: '#E10074', fontWeight: 'bold', fontSize: '12px',
            padding: 0
          }}> 
            {title}
          </Typography>

        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '1px',
           paddingRight:'20px',
           paddingLeft:'20px',
 // Push this div to the bottom
          }}>
          <Typography variant="h5" style={{ fontSize: '14px', fontWeight: 'bold' }}>
            {value}
          </Typography>
        </div>


      </div>
      {/* 
    <Card sx={{    border: '1px solid ', borderRadius: 0 ,width: '60px', height: '50px'  }}>
      <CardContent
      sx={{  padding:0 ,paddingLeft:'5px',paddingRight:'5px',backgroundColor:'green'}} 
       >
          <div style={{
            display:'block',
          }}>
         
            <Typography style={{ color: '#E10074', fontWeight: 'bold', fontSize: '8px',
            padding:0 }}>
              {title}
            </Typography>
          </div>

        
          <div style={{
            display:'flex',
            backgroundColor:'red',
            alignItems: 'flex-end',
            paddingTop:'10px'
          }}>
            <Typography variant="h5" style={{ fontSize: '10px', fontWeight: 'bold',paddingTop:'10px' }}>
              {value}
            </Typography>
          </div>
      </CardContent>
    </Card> */}

    </>
  )
}
export default Card1;