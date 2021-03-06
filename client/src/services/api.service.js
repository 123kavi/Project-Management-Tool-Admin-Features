import axios from 'axios';

const endpoint = 'http://localhost:5000';

export default class ApiService {

	static login1(payload) {
		return axios({
			method: 'post',
			url: `${endpoint}/api/login1`,
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

	static register1(payload) {
		return axios({
			method: 'post',
			url: `${endpoint}/api/register1`,
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

	static logout1() {
		let token = sessionStorage.getItem('authorization');
		return axios({
			method: 'post',
			url: `${endpoint}/api/logout1`,
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

	static getFiles() {
		let token = sessionStorage.getItem('authorization');
		return axios.get(`${endpoint}/api/files`, {
			headers: {
			  'Authorization': 'Bearer ' + token
			}
		})
		.then(res => res.data);
	}

	static uploadFile(file) {
		let token = sessionStorage.getItem('authorization');
		let formData = new FormData();
		formData.append('file', file);
		return axios.post(`${endpoint}/api/upload`, formData, {
			headers: {
			  'Authorization': 'Bearer ' + token,
			  'Content-Type': 'multipart/form-data'
			}
		})
		.then(res => res.data);
	}

	static downloadFile(fileName) {
		window.location.assign(`${endpoint}/api/download/${fileName}`);
	}
}