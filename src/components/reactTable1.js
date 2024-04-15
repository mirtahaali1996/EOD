import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
// import Navbar from '../components/Navbar';
// import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
import DataTable, { Media } from 'react-data-table-component';
import TextField from '@mui/material/TextField';
// import { jwtDecode } from "jwt-decode";



const ReactTable1 = () => {



  const columns = [
    {
      name: 'Store Name',
      selector: row => row.claim_number,
      sortable: true,
    },
    {
      name: 'Actual Revenue',
      selector: row => row.date,
      sortable: true,
      hide: Media.MD
    },
    {
      name: 'Revenue Goal',
      selector: row => row.amount,
      sortable: true,
      hide: Media.SM
    },
    {
      name: 'Attainment to Goal',
      selector: row => row.approved_amount,
      sortable: true,
      hide: Media.SM
    },
    {
      name: 'Day on Day Analysis',
      selector: row => row.formattedApprDate,
      sortable: true,
      hide: Media.MD
    },
  ];
  const data = [
    {
      claim_number: 'Store A',
      date: '2022-02-21',
      amount: 1000,
      approved_amount: 800,
      formattedApprDate: '2022-02-20',
    },
    // Add more objects as needed
  ];

 


  const customStyles = {

    headRow: {
      style: {
        backgroundColor: '#e91e63',
        color: 'white',
        fontSize: '14px',
        fontWeight: 'bold'
      }
    },
    pagination: {
      style: {
        color: '#e91e63',
      },
    },

  };




  return (
    <div className="bgcolor">
      {/* <Navbar /> */}
      {/* <Box height={40} /> */}
      {/* <Box sx={{ display: 'flex' }}>
        
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
            <TextField
              id="Search"
              label="Claim#"
              variant="standard"
              size="small"
              type='text'
              sx={{ marginLeft: 'auto' }}
            />
          </div> */}
          <DataTable
            columns={columns}
            data = {data}
            pagination
            fixedHeader
            fixedHeaderScrollHeight='330px'
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            customStyles={customStyles}
            // title='Claims Data'
            responsive
            striped
          />
        {/* </Box> */}
      {/* </Box> */}
    </div>
  );
}
export default ReactTable1;