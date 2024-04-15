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
import Reacttable4 from '../components/reactTable4';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import StoreAnalysis from '../components/storeAnalysis';
import NextDayBudget from '../components/nextDayBudget';


const NextDayBudgetGoals = () => {

    return (
        <>
            <div
             style={{
                    backgroundColor:'pink'
                }}>
                
                <div
                style={{
                    display:'flex',
                    marginTop:'2px'
                }}>
                <div style={{
                    marginRight:'2px',
                    width: '100%'
                }}>
                     <NextDayBudget />
                </div>
                <div
                style={{
                    marginLeft:'2px',
                    width: '100%'
                }}>
                     <Fields />     
                     </div>
                </div>{/*DIV 2 */}
                
                
                <div>
                    <Reacttable4 />
                </div>{/*DIV 3 */}

            </div>{/*Main Div */}
        </>
    )
}
export default NextDayBudgetGoals;