import React from 'react';
import verge_icon from '../img/verge_icon.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Eod_overview from '../components/eod_overview';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Card1 from '../components/card1';
import Table1 from '../components/table1';
import Table2 from '../components/table2';
import Table3 from '../components/table3';
import DoughnutChart from '../components/doughnutChart';
import BarChartVert from '../components/barChartVert';
import BarChartHor from '../components/barChartHor';
import BarChartHor2 from '../components/barChartHor2';
import BarChartHor3 from '../components/barChartHor3';
import MtdRevenue from '../components/mtd_revenue_perf';
import Fields from '../components/fields';
import Tables from '../components/tables';
import Reacttable1 from '../components/reactTable1';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import StoreAnalysis from '../components/storeAnalysis';


const storeAnalysis = () => {

    return (
        <>
            <div
                style={{
                }}
            >

                <div
                    style={{
                        display: 'flex',

                    }}>

                    <div
                        style={{
                            width: '100%',
                            backgroundColor: 'yellow',
                            marginRight: '20px'
                        }}>
                        <StoreAnalysis />
                    </div>

                    <div
                        style={{
                            width: '100%',
                            backgroundColor: 'purple'
                        }}>
                        <Fields />
                    </div>

                </div>{/* DIV 1 */}

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: 'pink'
                    }}
                >

                    <div
                        style={{
                            backgroundColor: '#E10074',
                            border: '1.2px solid black',
                            borderRadius: '10px',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            paddingRight: '40px',
                            paddingLeft: '40px',
                            display: 'inline-block',
                            margin: '10px',
                            marginRight: '60px'

                        }}>
                        <Typography variant="subtitle1" color='#FFFFFF' sx={{ textAlign: 'center' }} >
                            DAILY VIEW
                        </Typography>
                    </div>
                    <div
                        style={{
                            backgroundColor: '#E10074',
                            border: '1.2px solid black',
                            borderRadius: '10px',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            paddingRight: '40px',
                            paddingLeft: '40px',
                            display: 'inline-block',
                            margin: '10px',
                            marginLeft: '60px'

                        }}>
                        <Typography variant="subtitle1" color='#FFFFFF' sx={{ textAlign: 'center' }} >
                            MTD VIEW
                        </Typography>
                    </div>


                </div>{/* DIV 2 */}

                <div
                style ={{
                    display: 'flex',
                    padding: '5px'
                }}
                >
                <BarChartHor2 />
                <BarChartHor3 />
                </div> {/* DIV 3 */}

                <div  style ={{
                    display: 'flex',
                    width: '100%',
                    // overflow: 'auto',
                    boxSizing: 'border-box'}} >
                   <div style ={{
                    width: '100%',
                    marginRight:'10px' }}
                   > <Reacttable1 /></div>
                   <div style ={{
                    width: '100%',
                    marginLeft:'10px'}}
                   > <Reacttable1 /></div>
                
                  
                
                </div>{/* DIV 4 */}

            </div>{/* MAIN DIV */}

        </>
    )
}
export default storeAnalysis;