import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card1 from './card1';
import verge_icon from '../img/verge_icon.png';
import Eod_overview from '../components/eod_overview';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const Fields = () => {
    return (
        <>
            <div
                style={{ display: 'flex' }}
            >{/*Main Div */}
                <div
                    style={{
                        width: '100%',
                        border: '1px solid black',
                        display: 'block',
                        padding: '5px'
                    }}

                >
                    <div
                        style={{
                            width: '100%'
                        }}>
                        <select name="cars" id="cars" style={{ width: '100%' }}>
                            <option value="Region">Region</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            marginTop:'3px'
                        }}>
                        <select name="cars" id="cars" style={{ width: '100%',  }}>
                            <option value="All">All</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>


                </div>
                <div
                    style={{
                        width: '100%',
                        border: '1px solid black',
                        display: 'block',
                        padding: '5px'
                    }}

                >
                    <div
                        style={{
                            width: '100%'
                            
                        }}>
                        <select name="cars" id="cars" style={{ width: '100%' }}>
                            <option value="District">District</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            marginTop:'3px'
                        }}>
                        <select name="cars" id="cars" style={{ width: '100%' }}>
                            <option value="All">All</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>


                </div>
                <div
                    style={{
                        width: '100%',
                        border: '1px solid black',
                        display: 'block',
                        padding: '5px'
                    }}

                >
                    <div
                        style={{
                            width: '100%'
                        }}>
                        <select name="cars" id="cars" style={{ width: '100%',
                        backgroundColor: 'transparent', color: '#E10074',border: '1px solid grey' }}>
                            <option value="volvo">Store Name</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            marginTop:'3px'

                        }}>
                        <select name="cars" id="cars" style={{ width: '100%' 
                        }}>
                            <option value="volvo">All</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>


                </div>
                <div
                    style={{
                        width: '100%',
                        border: '1px solid black',
                        display: 'block',
                        padding: '5px'
                    }}

                >
                    <div
                        style={{
                            width: '100%'
                        }}>
                        <select name="cars" id="cars" style={{ width: '100%' }}>
                            <option value="volvo">Sales Date</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            marginTop:'3px'

                        }}>
                        <select name="cars" id="cars" style={{ width: '100%' }}>
                            <option value="volvo">All</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>


                </div>

              

            </div>
        </>
    )
}
export default Fields;