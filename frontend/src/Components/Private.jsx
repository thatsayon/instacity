import React, { useEffect } from 'react'
import useShareobj from '../CustomHooks/useShareobj'
import { Navigate } from 'react-router-dom';


function Private({ children }) {


    const { Token } = useShareobj();





    if (!Token || Token == null) {
        return <Navigate to="/Login" />;
    }

    return children
}

export default Private