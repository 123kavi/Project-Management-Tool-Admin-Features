import axios from 'axios';

const endpoint = 'http://localhost:5000';

export default class ApiService5 {

    static login5(payload) {
        return axios({
            method: 'post',
            url: `${endpoint}/api/login5`,
            data: payload
        })
        .then(res =>{
            if(res && res.data && res.data.success) {
                sessionStorage.setItem('authorization',res.headers.authorization);
                sessionStorage.setItem('role', res.data.role);
                return res.data;
            } else {
                return res;
            }
        });
    }

    static register5(payload) {
        return axios({
            method: 'post',
            url: `${endpoint}/api/register5`,
            data: payload
        })
        .then(res =>{
            if(res && res.data && res.data.success) {
                sessionStorage.setItem('authorization',res.headers.authorization);
                sessionStorage.setItem('role', res.data.role);
                return res.data;
            } else {
                return res;
            }
        });
    }

    static logout5() {
        let token = sessionStorage.getItem('authorization');
        return axios({
            method: 'post',
            url: `${endpoint}/api/logout5`,
            headers: {
              Authorization: 'Bearer ' + token
            }
          })
        .then(res => {
            sessionStorage.removeItem('authorization');
            sessionStorage.removeItem('role');
            return res.data;
        });
    }

   
}


