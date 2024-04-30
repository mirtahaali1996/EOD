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
import { useMediaQuery } from "react-responsive";




const Home = () => {
    
    const width_700px = useMediaQuery({ query: "(min-width: 700px)" });

    return (


        <>
            <div
                style={{
                    contain:'content',
                    marginTop:'2px',
                    // paddingBottom:'0px',
                    display: 'flex',
                    height:'99vh',
                    // flexDirection: width_700px? 'row':'column',
                    // backgroundColor: 'green',
                    // padding: '2px',
                    // height: ''
                    justifyContent:'center',
                    // alignItems: width_700px? 'center':'center'
                }}>{/*TOP DIV */}

                <div
                    style={{
                        // marginRight: '10px',
                        // // backgroundColor: 'black',
                        // display: 'flex',
                        // flexDirection: 'column',
                        // flex: '1',
                        // contain:'content'
                        // height:'20vh !important',
                        width: '50vw',
                        overflow:'hidden',
                        // backgroundColor:'red',
                        // margin:'5px',
                        marginLeft:'15px',
                        marginRight: '15px',   
                        flex: '1',
                        contain:'content',
                        padding:'2px',
                        // backgroundColor: 'green',
                        // display: 'flex',
                        // flexDirection: 'column',
                    }}
                >{/*LEFT DIV */}
            
                    <div style={{
                        // flex: '1',
                        margin:'5px 0px',
                        height: '60px',
                        contain:'content'
                        // backgroundColor: 'blue'
                    }} >
                        <Eod_overview
                        style={{
                            height:'100%'
                        }} />
                    </div>

                    <div style={{
                        contain:'content',
                        flex: '1',
                        display: 'flex', width: '100%',
                        marginBottom: '40px',
                        // border:'1px solid black',
                        // backgroundColor:'red',
                        // height: '100%',
                        // backgroundColor: 'red',
                        flexWrap:'wrap',
                        gap:'5px',
                        contain:'content'
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


                    <div style={{ flex: '1', width: '100%', margin:'40px 0px',height:'150px',contain:'content',border:'1px solid black', }}>
                        <MtdRevenue />
                    </div>

                    <div style={{ display: 'flex',flex: '1', width: '100%',marginTop:'40px',contain:'content',height:'330px',backgroundColor:'gray',border:'1px solid black' }}>
                        <BarChartVert />
                    </div>
                </div> {/* LEFT DIV */}


                <div style={{
                    width: '100%',
                    marginLeft:'15px',
                    marginRight: '15px',  
                    flex: '1',
                    // backgroundColor: 'green',
                    display: 'flex',
                    flexDirection: 'column',
                }}>{/* Right DIV */}

                    <div style={{marginTop:'5px'}}>{/* Fields DIV */}
                        <Fields />
                    </div>{/* Fields DIV */}
                <div style={{height:'180px'}}>
                    <div
                        style={{height:'100%', flex: '1', width: '100%', marginBottom: '5px'}}>{/* Tables DIV */}

                        <Tables />

                    </div>{/* Tables DIV */}
                    </div>
                    <div
                        style={{
                            // backgroundColor:'orange',
                            maxWidth: '100%',
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