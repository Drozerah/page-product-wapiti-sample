import Axios from 'axios'

// Define class Service
class Service {
  // Define GetProducts static method
  // @{param} the api URL
  static getProducts (url) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await Axios.get(url)
        const data = res.data
        resolve(data)
      } catch (err) {
        reject(err)
      }
    })
  }
}

export default Service
