import axios from "axios"
import VueAxios from "vue-axios"

const getData = (paylaod) => {
    
    /*
        1) Pulls the data from the API
        2) Sends data to Application in order to be formatted
    */

    return axios.get(paylaod).then(response => {
        return response.data
    })
   
    /*
        API url:
        https://enet-test.s3.eu-west-1.amazonaws.com/data_structure.json
    */
}

export default getData