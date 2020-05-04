import axios from 'axios';
import * as Config from './../constaints/config';

export default function CallApi(endPoint, method = "GET", body) {
    return axios({
            method: "GET",
            url: "https://5e8d8d5222d8cd0016a79676.mockapi.io/api/ListProducts",
            data: null,
          })
            .then((res) => {
             
              this.setState({
                products: res.data
              })
            })
            .catch((err) => {
              console.log(err);
            });
    
}