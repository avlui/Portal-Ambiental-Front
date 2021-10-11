// Hooks
import React, {useState} from 'react';

const WastesContext = React.createContext({});

// podemos definir un provider para el contexto.
export function UsersContextProvider({children}){ //Children es lo que envuelve la etiqueta (lo que tendra acceso al contexto)
    const [wasteContext, setWasteContext] = useState([])
    
    
    return (
        <WastesContext.Provider value={[wasteContext, setWasteContext]}>
            {children}
        </WastesContext.Provider>
    )
}

export default WastesContext;