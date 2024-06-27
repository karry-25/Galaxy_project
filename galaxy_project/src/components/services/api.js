import axios from 'axios';
const URL = 'http://localhost:7000';

export const submitForm = async (data) => {
    console.log(data);
    return axios.post(`${URL}/submitForm`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res)=>{
        window.open('http://localhost:7000/getxlsx');
    });
}

export const importExcel = async (data) => {
    console.log(data);
    return axios.post(`${URL}/submitFile`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
