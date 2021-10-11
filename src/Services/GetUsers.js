//Cliente para hacer peticiones (alternativa a fetch) --> npm install axios
import axios from 'axios';

function GetUsers(props) {
    
    return (
        //Solicitando las notas guardadas en el servidor para mostrarlas en pantalla.
        axios.get('http://localhost:5000/puntos') //API Local creada con Node
        .then(response => {

            const users = response.data //Datos de los usuarios registrados en la DB
            users.forEach((user)=>{

                const wastesOfUser = [] // Arreglo para guardar los tipos de residuos que genera el usuario
                const directionOfwastes = user.desperdicios //Arreglo que contiene las direcciones hacia otra tabla que guarda la información sobre los residuos que genera el usuario
                directionOfwastes.forEach((wasteDirection)=>{

                    axios.get(`http://localhost:5000/desperdicios/${wasteDirection}`)
                    .then((currentWaste)=>{
                        const typeOfWaste = currentWaste.data.tipo //Variable que guarda el tipo de residuo de los residuos que genera el usuario
                        wastesOfUser.push(typeOfWaste)
                        if(wastesOfUser.length === directionOfwastes.length){ //Si ya se agregaron todos los tipos de residuos que general el usuario al arreglo wastesOfUser
                          
                            user["tipo"] = wastesOfUser //se agrega a los atributos del usuario el arreglo que contiene los tipos de residuos que este genera.
                        }
                    })
                })
            })
            return (users); 
            }
        )
        .catch((error)=>{
            console.log('Error loading data.')
            console.error(error);
        })
    );
}

export default GetUsers;