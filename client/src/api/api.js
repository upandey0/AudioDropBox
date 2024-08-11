import axios from 'axios'

const baseCall = axios.create(
    {
        baseURL: 'http://localhost:3000/api'
    }
)

export default baseCall