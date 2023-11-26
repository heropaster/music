import axios from 'axios'

const axiosClient = axios.create({
    baseURL: "https://skypro-music-api.skyeng.tech",
})

export default axiosClient
