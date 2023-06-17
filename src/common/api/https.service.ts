import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.kinopoisk.dev/v1.3/',
    headers: {
        'X-API-KEY': 'KMBBHG0-QKXMFYT-QFRPHTR-AE3RB6Q'
    }
})

