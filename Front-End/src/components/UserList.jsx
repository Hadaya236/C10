import React, { Component } from 'react';
import UserService from '../services/UserService';
class UserList extends Component {
    constructor(props){
        super(props)

        this.state = {
            users: [],
        }
        this.delete = this.delete.bind(this);
    }
    delete(id){
        UserService.DeleteUser(id).then(res=>{
            this.setState({users:this.state.users.filter(users=>this.delete.id !==id)});
            window.location.assign("/Users");
        });
        
    }
    componentDidMount(){
        UserService.getUsers().then((res)=> {
            this.setState({ users: res.data});
        });
    }
    
    render() {
        return (
            <div>
              <h2 className="text-center">List of Users</h2>  
              <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Password</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                               user => 
                               <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.type}</td>
                                <td>{user.password}</td>
                                <td>
                                    <button onClick={() => this.delete(user.id)}className="btn btn-info" style={{color:'white'}}>Delete</button>
                                </td>
                               </tr>
                            )
                        }
                    </tbody>
                </table>
              </div>
            </div>
        );
    }
}

export default UserList;