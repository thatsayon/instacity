import React, { useEffect } from 'react'
import useShareobj from '../CustomHooks/useShareobj'
import { Navigate } from 'react-router-dom';


function Private({ children }) {


    const { user } = useShareobj();

    console.log(user)



    if (!user || user == null) {
        return <Navigate to="/Login" />;
    }

    return children
}

export default Private