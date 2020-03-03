import axios from 'axios'

const globalAxios = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 20000
})

globalAxios.interceptors.request.use(config => {
  // Attaching the API key to every request as a query param via a request interceptor
  config.params.apikey = process.env.VUE_APP_API_KEY
  return config
}, (err) => Promise.reject(err)
)

export default globalAxios
