//Cliente para hacer peticiones (alternativa a fetch) --> npm install axios
import axios from 'axios';

function CreateNotes({title, body, userId, important}) {
    return (
        
        //Guardando nuestra nueva nota grabandola en el servidor (Los datos se guardan permanentemente en nuetro servidor)
        axios.post('https://desolate-brushlands-32255.herokuapp.com/api/notes', {title, body, userId, important} ) //API Local creada con Node    
        .then((response) =>{
            const {data} = response;
            return data;
        })
    );
}

export default CreateNotes;