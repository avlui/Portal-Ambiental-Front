import {useContext, useCallback} from 'react';

import UsersContext from '../../Context/UsersContext';
function useUser() {

    const[jwt, setJwt] = useContext(UsersContext)

    const login = useCallback(({email, contrasena})=>{
        setJwt('test')
    },[setJwt])

    const logout = useCallback(()=>{
        setJwt(null)
    },[setJwt])
    return {
        isLogged : Boolean(jwt),
        login,
        logout
    }
}
export default useUser;  