import React from 'react';

//Components
import CheckBox from '../Layout/Checkbox/Checkbox';

//Styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter} from '@fortawesome/free-solid-svg-icons'
import "./Filter.css"
function Filter({allUsers,usersContext}) {
    return (
        <div className='FilterButton'>
           <div className="dropdown">
                <button  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <FontAwesomeIcon icon={faFilter} />
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                    <CheckBox
                        allUsers = {allUsers}
                        usersToFilter = {usersContext}
                    />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Filter;