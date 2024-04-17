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
                style={{ display: 'flex',backgroundColor:'white',marginBottom:'10px' }}
            >{/*Main Div */}
                <div
                    style={{
                        width: '100%',
                        border: '2px solid black',
                        borderRight:'1px solid black',
                        display: 'block',
                        padding: '5px'
                    }}

                >
                    <div
                        style={{
                            width: '100%'
                        }}>
                        <select name="cars" id="cars" style={{ width: '100%',border:'none',color:'#E10074',fontWeight:'bold',outline:'none'  }}>
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
                        <select name="cars" id="cars" style={{ width: '100%',color:'#E10074',padding:'2px',outline:'none',borderColor:'#cfcdcd'   }}>
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
                        border: '2px solid black',
                        borderLeft:'1px solid black',
                        borderRight:'1px solid black',
                        display: 'block',
                        padding: '5px'
                    }}

                >
                    <div
                        style={{
                            width: '100%'
                            
                        }}>
                        <select name="cars" id="cars" style={{ width: '100%',border:'none',color:'#E10074',fontWeight:'bold',outline:'none'  }}>
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
                        <select name="cars" id="cars" style={{ width: '100%',color:'#E10074',padding:'2px',outline:'none',borderColor:'#cfcdcd'   }}>
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
                        border: '2px solid black',
                        borderLeft:'1px solid black',
                        borderRight:'1px solid black',
                        display: 'block',
                        padding: '5px'
                    }}

                >
                    <div
                        style={{
                            width: '100%'
                        }}>
                        <select name="cars" id="cars" style={{ width: '100%',
                        border:'none',color:'#E10074',fontWeight:'bold',outline:'none'  }}>
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
                        <select name="cars" id="cars" style={{ width: '100%',color:'#E10074',padding:'2px',outline:'none' ,borderColor:'#cfcdcd'
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
                        border: '2px solid black',
                        borderLeft:'1px solid black',
                        display: 'block',
                        padding: '5px'
                    }}

                >
                    <div
                        style={{
                            width: '100%'
                        }}>
                        <select name="cars" id="cars" style={{ width: '100%',border:'none',color:'#E10074',fontWeight:'bold',outline:'none'  }}>
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
                        <select name="cars" id="cars" style={{ width: '100%',color:'#E10074',padding:'2px',outline:'none',borderColor:'#cfcdcd'  }}>
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