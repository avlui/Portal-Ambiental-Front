import React from 'react';

//Styles
import './DashBoardView.css'

//Components
import NavBar from '../../Components/Layout/NavBar/NavBar';

function DashBoardView() {

    return (
        <div className='HomeView'>
            <NavBar/>
            <div className='NavSpace'></div>

            <h1>DashBoard</h1>
            
        </div>
    );
}

export default DashBoardView;