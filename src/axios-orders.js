import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-366e6-default-rtdb.firebaseio.com/'
})

export default instance;