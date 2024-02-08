import { useContext } from 'react'
import { FetchContext } from '../ContextApis/ApiContext';



function useShareobj() {
    const obj = useContext(FetchContext);
    return obj;
}

export default useShareobj