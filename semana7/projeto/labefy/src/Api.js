import axios from 'axios'

const Api = axios.create({
    baseUrl: 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/'
})

export default Api 