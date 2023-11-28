import axios from 'axios'

export const api = axios.create({
 baseURL: 'https://back-end-production-5622.up.railway.app/user/'
})
 
api.interceptors.request.use(async (config) => {
 config.headers.authorization = `Bearer edkso92cnPOiuwND82912ohndcmspo92`
 return config
})

