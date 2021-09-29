// Components
import React from 'react';
import useIconIluestration from '../../Hooks/useIconIlustration'
import {Link} from 'react-router-dom'

//Circular progressbar
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

//Styles
import './PopUpMarkerCard.css';

function PopUpMarkerCard({name , type, lat, lgn}) {

    const percentageA = 15;
    const percentageB = 48;
    const percentageC = 90;

    const IconType = useIconIluestration(type) 
    // const MarkerToIcon = useMarkerIlustration(type)
    return (
        <div className='PopUpMarkerCard'>
            <div className="info">
                    <Link  to='/profile/:id'><h3>{name}</h3></Link>
                    <div className="wasteType">
                        <p>MAIN WASTE: {type}</p>
                        <img src={IconType} alt={IconType} /> 
                    </div>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad, dolor vero voluptates voluptas laborum inventore unde doloribus. Aliquid, nesciunt!</p>
                </div>
            <br />
            <div className="graphics">
                <CircularProgressbar value={percentageA} text={`${percentageA}%`} />
                <div className="space"></div>
                <CircularProgressbar value={percentageB} text={`${percentageB}%`} />
                <div className="space"></div>
                <CircularProgressbar value={percentageC} text={`${percentageC}%`} />
            </div>
            <br />
                <small>Cordenadas: ({lat} ,{lgn})</small>
        </div>
    );
}

export default PopUpMarkerCard;