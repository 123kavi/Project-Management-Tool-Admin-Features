import axios from 'axios';

const endpoint = 'http://localhost:5000';

export default class ApiService4 {

    static login4(payload) {
        return axios({
            method: 'post',
            url: `${endpoint}/api/login4`,
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

    static register4(payload) {
        return axios({
            method: 'post',
            url: `${endpoint}/api/register4`,
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

    static logout4() {
        let token = sessionStorage.getItem('authorization');
        return axios({
            method: 'post',
            url: `${endpoint}/api/logout4`,
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


