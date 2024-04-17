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
                    // height: ''

                }}>{/*TOP DIV */}

                <div
                    style={{
                        width:'50vw',
                        marginRight: '10px',
                        // backgroundColor: 'black',
                        display: 'flex',
                        flexDirection: 'column',
                        flex: '1',
                    }}
                >{/*LEFT DIV */}

                    <div style={{
                        // flex: '1',
                        marginBottom: '5px',
                        height: '50px',
                        backgroundColor: 'blue'
                    }} >
                        <Eod_overview
                        style={{
                            height:'100%'
                        }} />
                    </div>

                    <div style={{
                        contain:'content',
                        // flex: '1',
                        display: 'flex', width: '100%',
                        marginBottom: '5px',
                        // backgroundColor:'red',
                        // height: '100%',
                        // backgroundColor: 'red',
                        flexWrap:'wrap',
                        gap:'5px'
                    }}>
                        <div style={{
                            flex: '1',
                            width: '100%',
                            // paddRight: '5px',
                            // backgroundColor:'pink',
                            

                        }}>
                            <Table1 style={{
                            height:'100px'
                        }}  />
                        </div>
                        <div
                            style={{
                                flex: '1',
                                width: '100%',
                                // marginLeft: '5px'
                            }}>
                            <Table2 />
                        </div>

                    </div>


                    <div style={{ flex: '1', width: '100%' }}>
                        <MtdRevenue />
                    </div>

                    <div style={{ flex: '1', width: '100%' }}>
                        <BarChartVert />
                    </div>
                </div> {/* LEFT DIV */}


                <div style={{
                    width: '100%',
                    marginBottom: '5px', marginLeft: '5px', flex: '1',
                    // backgroundColor: 'green',
                    display: 'flex',
                    flexDirection: 'column',
                }}>{/* Right DIV */}

                    <div>{/* Fields DIV */}
                        <Fields />
                    </div>{/* Fields DIV */}
                <div style={{height:'200px'}}>
                    <div
                        style={{height:'100%', flex: '1', width: '100%', marginBottom: '5px',backgroundColor:'pink'}}>{/* Tables DIV */}

                        <Tables />

                    </div>{/* Tables DIV */}
                    </div>
                    <div
                        style={{
                            // backgroundColor:'orange',
                            maxWidth: '740px',
                            // height:'700px',
                            overflow: 'hidden'
                        }}>
                        <BarChartHor
                        // style={{
                        //     width: '100%',
                        //     // other styles as needed
                        // }}
                        />


                    </div>
                </div>
                {/* <div style={{ flex: '1',width: '100%' }}>{/*barChartHor*/}

                {/* </div> */}


            </div>{/* Right DIV */}
            <div>


            </div> {/*TOP DIV */}



        </>
    );

}
export default Home;