import axios from 'axios'



const axiosFetch = axios.create({
    baseURL: '/',
    withCredentials: true,
    method: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']

})

function useFetch() {
    return axiosFetch;
    
}

export default useFetch