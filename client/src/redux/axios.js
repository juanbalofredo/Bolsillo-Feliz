import axios from 'axios';


const instance = axios.create({
    baseURL:  "http://pf-grupo2-production.up.railway.app"
});

export default instance;