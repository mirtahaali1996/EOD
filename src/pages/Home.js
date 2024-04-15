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
import MtdRevenue from '../components/mtd_revenue_perf';
import Fields from '../components/fields';
import Tables from '../components/tables';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const Home = () => {

    return (


        <>
            <div
                style={{
                    display: 'flex',
                    // backgroundColor: 'green',
                    // padding: '2px',
                    height: '100vh'

                }}>{/*TOP DIV */}

                <div
                    style={{
                        marginRight: '5px',
                        // backgroundColor: 'yellow',
                        flex: '1',
                    }}
                >{/*LEFT DIV */}

                    <div style={{
                        flex: '1',
                        marginBottom: '5px'
                    }} >
                        <Eod_overview />
                    </div>

                    <div style={{
                        flex: '1',
                        display: 'flex', width: '100%',
                        marginBottom: '5px',
                        // backgroundColor:'red',

                    }}>
                        <div style={{
                            flex: '1',
                            width: '100%',
                            marginRight: '2px'
                        }}>
                            <Table1 />
                        </div>
                        <div
                            style={{
                                flex: '1',
                                width: '100%',
                                marginLeft: '2px'
                            }}>
                            <Table2 />
                        </div>

                    </div>


                    <div style={{ flex: '1', width: '100%', }}>
                        <MtdRevenue />
                    </div>

                    <div style={{ flex: '1', width: '100%' }}>
                        <BarChartVert />
                    </div>
                </div> {/* LEFT DIV */}


                <div style={{ width: '100%',
                 marginBottom: '5px', marginLeft: '5px', flex: '1',
                  }}>{/* Right DIV */}

                    <div>{/* Fields DIV */}
                        <Fields />
                    </div>{/* Fields DIV */}

                    <div
                        style={{ flex: '1', width: '100%', marginBottom: '5px' }}>{/* Tables DIV */}

                        <Tables />

                    </div>{/* Tables DIV */}
                

                    {/* <div style={{ flex: '1',width: '100%' }}>{/*barChartHor*/}

                    {/* </div> */} 
                    <BarChartHor
                        style={{
                            width: '100%',
                            // other styles as needed
                        }}
                    />

                </div>{/* Right DIV */}
              

            </div> {/*TOP DIV */}



        </>
    );

}
export default Home;