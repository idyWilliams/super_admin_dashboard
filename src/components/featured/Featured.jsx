import React from 'react'
import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className='title'>Total Revenue</h1>
            <MoreVertIcon fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featuredChat">
<CircularProgressbar/>
            </div>
            <div className="title">Total sales</div>
            <div className="amount"></div>
        </div>
    </div>
  )
}

export default Featured