import React, { createContext, useState } from "react";

export const FetchContext = createContext(null);

function ApiContext({ children }) {
    const [user, setUser] = useState("hello world");

    const shareobj = {
        user,
    };



    

    return (
        <FetchContext.Provider value={shareobj}>
            {children}
        </FetchContext.Provider>
    );
}

export default ApiContext;
