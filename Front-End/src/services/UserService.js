import axios from 'axios';

const User_Url ="http://localhost:8083/user"

class UserService {

    getUsers(){
        return axios.get(User_Url);
    }
    AddUser(user){
    
        return axios.post(User_Url, user);
    }
    getUserId(userId){
        return axios.get(User_Url+"/"+userId);
    }
    UpdateUser(user, userId){
        return axios.put(User_Url+"/"+userId, user);
    }
    DeleteUser(userId){
        return axios.delete(User_Url+"/"+userId);
    }
}

export default new UserService()