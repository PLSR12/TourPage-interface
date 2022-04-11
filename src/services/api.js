import axios from 'axios'

const apiPacks = axios.create({
    baseURL: 'http://localhost:3001/'
})

export default apiPacks