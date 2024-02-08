import axios from 'axios'



const axiosFetch = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    withCredentials : true ,
    method : ['GET','POST', 'PUT', 'PATCH', 'DELETE']

})

function useFetch() {
    return axiosFetch;
    
}

export default useFetch