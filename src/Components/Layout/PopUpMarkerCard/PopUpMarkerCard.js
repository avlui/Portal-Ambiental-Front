import React from 'react';

//Circular progressbar
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

//Styles
import './PopUpMarkerCard.css';

function PopUpMarkerCard(props) {
    const percentageA = 15;
    const percentageB = 48;
    const percentageC = 90;
    return (
        <div className='PopUpMarkerCard'>
            <CircularProgressbar value={percentageA} text={`${percentageA}%`} />
            <CircularProgressbar value={percentageB} text={`${percentageB}%`} />
            <CircularProgressbar value={percentageC} text={`${percentageC}%`} />
        </div>
    );
}

export default PopUpMarkerCard;