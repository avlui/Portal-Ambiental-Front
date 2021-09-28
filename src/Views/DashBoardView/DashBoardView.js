import React from 'react';

//Styles
import './DashBoardView.css'

//React-Router
import {Link} from 'react-router-dom';


function DashBoardView() {

    return (
        <div className='HomeView'>
            <h1>DashBoard</h1>
            
            <Link to= '/map'>
                View my location
            </Link>
        </div>
    );
}

export default DashBoardView;