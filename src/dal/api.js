import * as axios from 'axios';
import * as FormData from 'form-data';
// import * as fs from 'fs';
//
// let data = new FormData();
// data.append('avatar', fs.createReadStream('/home/ali/Mine/c/nodejs-blog/public/img/blog-header.jpg'));

const instance = axios.create({
    baseURL: 'https://api-nodejs-todolist.herokuapp.com/',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const userAPI = {
    registerUser(name, email, password, age) {
        return instance.post(`user/register`, {
            "name": name,
            "email": email,
            "password": password,
            "age": age,
        })
    },
    login(email, password) {
        return instance.post(`user/login`, {
            'email': email,
            'password': password,
        });
    },
    logout(token) {
        return instance.post(`user/logout`, {}, {headers: {'Authorization': `Bearer ${token}`}})
    },
    getMe(token) {
        return instance.get(`user/me`, {headers: {'Authorization': `Bearer ${token}`}})
    },
    updateUserProfile(name, email, age, token) {
        return instance.put(`user/me`, {
            "name": name,
            "email": email,
            "age": age,
        }, {headers: {'Authorization': `Bearer ${token}`}})
    },
    uploadImage(token) {
        return instance.post(`user/me/avatar`, {}, {headers: {'Authorization': `Bearer ${token}`}})
    }
}

export const taskAPI = {
    getAllTask(token) {
        return instance.get('task', {headers: {'Authorization': `Bearer ${token}`}}).then(
            response => {
                return response
            }
        )
    },
    addTask(description, token) {
        return instance.post(`task`, {'description': description}, {headers: {'Authorization': `Bearer ${token}`}})
    },
    deleteTask(id, token) {
        return instance.delete(`task/${id}`, {headers: {'Authorization': `Bearer ${token}`}})
    },
    updateTaskDescription(id, description, token) {
        return instance.put(`task/${id}`, {'description': description}, {headers: {'Authorization': `Bearer ${token}`}})
    },
    completedTask(id, completed, token) {
        return instance.put(`task/${id}`, {'completed': completed}, {headers: {'Authorization': `Bearer ${token}`}})
    }
}
