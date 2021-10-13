//Hooks
import React, {useState} from 'react';

const UsersContext = React.createContext();

// podemos definir un provider para el contexto.
export function UsersContextProvider({children}){ //Children es lo que envuelve la etiqueta (lo que tendra acceso al contexto)
    const [jwt, setJwt] = useState(null)
    
    return (
        <UsersContext.Provider value={[jwt, setJwt]}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContext;