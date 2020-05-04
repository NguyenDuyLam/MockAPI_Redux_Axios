import axios from 'axios';
import * as Config from './../constaints/config';

export default function CallApi(endPoint, method = "GET", body) {
    return axios({
            method: method,
            url: `${Config.API_URL}/${endPoint}`,
            data: body,
          }).catch((err) => {
              console.log(err);
            });
    
}