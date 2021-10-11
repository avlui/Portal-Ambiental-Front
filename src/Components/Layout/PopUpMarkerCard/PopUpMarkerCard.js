// Components
import React from 'react';

//Circular progressbar
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

//Styles
import './PopUpMarkerCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faClock, 
    faMapMarkerAlt, 
    faUserTie, 
    faBuilding,
    faPhoneAlt,
    faAt
} from '@fortawesome/free-solid-svg-icons'

function PopUpMarkerCard({
    key,
    lat,
    lgn,
    nombre,
    gerente,
    direccion,
    telefono,
    email,
    horario,
    tipo
  }
  ){
    const percentageA = 15;
    const percentageB = 48;
    const percentageC = 90;

    let wastes = []
    
    if(typeof(tipo)=== "undefined"){
        wastes = ['cargando...']
    }
    else{
        wastes = tipo.map((waste) =>{
            return <li key={tipo.indexOf(waste)}> <small>{waste}</small></li>
            
        })
    }
    

    return (
        <div className='PopUpMarkerCard'>
            <div className="info">
                    <div className="header">
                        <h2>{nombre}</h2>
                        <h4>Residuos generados</h4>
                            <div className="wasteType">
                            <ul>
                                {wastes}
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="contact">
                        <h3>Contactanos</h3>
                        <div className="contactInfo">
                            <FontAwesomeIcon icon={faUserTie}/>
                            <div className="litleSpace"></div>
                            <small> <b>gerente:</b> {gerente}</small>
                        </div>
                        <br />
                        <div className="contactInfo">
                            <FontAwesomeIcon icon={faBuilding}/>
                            <div className="litleSpace"></div>
                            <small> <b>dirección:</b> {direccion}</small>
                        </div>
                        <br />
                        <div className="contactInfo">
                            <FontAwesomeIcon icon={faAt}/>
                            <div className="litleSpace"></div>
                            <small> <b>email:</b> {email}</small>
                        </div>
                        <br />
                        <div className="contactInfo">
                            <FontAwesomeIcon icon={faPhoneAlt}/>
                            <div className="litleSpace"></div>
                            <small> <b>número de telefono:</b> {telefono}</small>
                        </div>
                        <br />
                        <div className="contactInfo">
                            <FontAwesomeIcon icon={faClock}/>
                            <div className="litleSpace"></div>
                            <small><b> Horario de atención:</b> {horario}</small>
                        </div>
                        <br />
                        <div className="contactInfo">
                            <FontAwesomeIcon icon={faMapMarkerAlt}/>
                            <div className="litleSpace"></div>
                            <small> Cordenadas: ({lat} ,{lgn})</small>
                        </div>                       
                    </div>
                    <hr />
                    <div className="statistics">
                        <h3>Estadisticas</h3>
                        <div className="graphics">
                            <CircularProgressbar value={percentageA} text={`${percentageA}%`} />
                            <div className="space"></div>
                            <CircularProgressbar value={percentageB} text={`${percentageB}%`} />
                            <div className="space"></div>
                            <CircularProgressbar value={percentageC} text={`${percentageC}%`} />
                        </div>
                    </div>  
            </div>              
        </div>
    );
}

export default PopUpMarkerCard;