import axios, { AxiosResponse } from "axios";
import { User } from "../models/user";
axios.defaults.baseURL='http://localhost:5000/api';

const responseBody =<T> (response : AxiosResponse<T>) => response.data;

const requests = {
    get:<T> (url:string) => axios.get<T>(url).then(responseBody),
    post:<T>(url:string, body:{}) => axios.post<T>(url,body).then(responseBody),
    put:<T> (url:string, body:{}) => axios.put<T>(url,body).then(responseBody),
    delete:<T> (url:string) => axios.delete<T>(url).then(responseBody)
}

const UserProfile = {
    list : () => requests.get<User[]>('/userProfile'),
    details : (id:string) => requests.get<User> (`/userProfile/${id}`),
    create : (user : User)=> requests.post('/userProfile',user),
    update : (user: User) => requests.put<void> (`/userProfile/${user.id}`,user),
    delete : (id:string) => requests.delete<void>(`/userProfile/${id}`)
}

const user = {
    UserProfile
}

export default user;