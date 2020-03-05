import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Sf3l8kmjrve61K_XMwWaFh98ZX0EdskFoiLjnVje4Qg'
    }
})


