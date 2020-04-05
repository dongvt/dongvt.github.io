'use strict';
const baseURL = 'http://localhost:3000/';

export async function makeRequest(url, method = 'GET', body = null, token = null) {

    let options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (method === 'POST') {
        options.body = JSON.stringify(body);
    }

    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(baseURL + url, options);
    const dataObj = await response.json();

    if (!response.ok) {
        console.log(response);
        throw new Error(`${dataObj.status}:${dataObj.message}`);
    } else {
        return dataObj;
    }

}