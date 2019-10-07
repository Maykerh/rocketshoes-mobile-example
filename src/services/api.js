import axios from 'axios';
import { createStore } from 'redux';

const api = axios.create({
    baseURL: 'http://192.168.10.1:3333',
});

export default api;
