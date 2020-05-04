import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://127.0.0.1:9001/api/desso`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getMotifs() {
    return apiClient.get('/info')
  },
  getMotif(id) {
    return apiClient.get('/info/' + id)
  },
  getTfbs(id) {
    return apiClient.get('/sites/' + id)
  }
}
