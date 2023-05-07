import axios from "axios"

const tiendaApi = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export default tiendaApi