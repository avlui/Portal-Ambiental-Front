//Hooks
import React, {useState} from 'react';

const UsersContext = React.createContext();

// podemos definir un provider para el contexto.
export function UsersContextProvider({children}){ //Children es lo que envuelve la etiqueta (lo que tendra acceso al contexto)
    const [userContext, setUserContext] = useState([])
    
    
    return (
        <UsersContext.Provider value={[userContext, setUserContext]}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContext;