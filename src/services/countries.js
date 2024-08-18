import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name'

const getCountry = async (name) => {
  try {
    const response = await axios.get(`${baseUrl}/${name}`)
    return response.data
  } catch (e) {
    return { error: 'not found' }
  }
}

export default { getCountry }
