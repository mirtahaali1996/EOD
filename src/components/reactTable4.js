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



const ReactTable4 = () => {



  const columns = [
    {
      name: 'Region',
      selector: row => row.claim_number,
      sortable: true,
    },
    {
      name: 'Consumer Voice',
      selector: row => row.date,
      sortable: true,
      hide: Media.MD
    },
    {
      name: 'TFB Voice',
      selector: row => row.amount,
      sortable: true,
      hide: Media.SM
    },
    {
      name: 'Consumer TMI',
      selector: row => row.approved_amount,
      sortable: true,
      hide: Media.SM
    },
    {
      name: 'TFB TMI',
      selector: row => row.formattedApprDate,
      sortable: true,
      hide: Media.MD
    },
    {
        name: 'Consumer Core BTS',
        selector: row => row.formattedApprDate,
        sortable: true,
        hide: Media.MD
      },
      {
        name: 'TFS BTS',
        selector: row => row.formattedApprDate,
        sortable: true,
        hide: Media.MD
      },
      {
        name: 'UFG',
        selector: row => row.formattedApprDate,
        sortable: true,
        hide: Media.MD
      },
      {
        name: 'MIG',
        selector: row => row.formattedApprDate,
        sortable: true,
        hide: Media.MD
      },
      {
        name: 'PRE',
        selector: row => row.formattedApprDate,
        sortable: true,
        hide: Media.MD
      },
      {
        name: 'Accessories GP',
        selector: row => row.formattedApprDate,
        sortable: true,
        hide: Media.MD
      },
      {
        name: 'Accessories Units',
        selector: row => row.formattedApprDate,
        sortable: true,
        hide: Media.MD
      },
      {
        name: 'Total Revenue',
        selector: row => row.formattedApprDate,
        sortable: true,
        hide: Media.MD
      },
      {
        name: 'Daily Goal',
        selector: row => row.formattedApprDate,
        sortable: true,
        hide: Media.MD
      },
      {
        name: 'Revenue to Goal',
        selector: row => row.formattedApprDate,
        sortable: true,
        hide: Media.MD
      },
      {
        name: 'MTD Revenue',
        selector: row => row.formattedApprDate,
        sortable: true,
        hide: Media.MD
      },
      {
        name: 'MTD Goal',
        selector: row => row.formattedApprDate,
        sortable: true,
        hide: Media.MD
      },
      {
        name: 'MTD % Revenue to Goal',
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
        backgroundColor: '#000000',
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
            defaultSortField="Region" // Replace with the actual field name
            defaultSortAsc
          />
        {/* </Box> */}
      {/* </Box> */}
    </div>
  );
}
export default ReactTable4;