import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import UserService from '../services/UserService';
class UpdateUser extends Component {
    constructor(props){
        super(props)

        this.state ={
            id: "",
            name: "",
            type:"",
            password:""
        
            
        }
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changetypeHandler = this.changetypeHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
        this.update = this.update.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    changenameHandler= (event)=> {
        this.setState({name: event.target.value});
    }
    changetypeHandler= (event)=> {
        this.setState({type: event.target.value});
    }
    changepasswordHandler= (event)=> {
        this.setState({password: event.target.value});
    }
    changeidHandler= (event)=> {
        this.setState({id: event.target.value});
        
    }
    update =(e)=>{
        e.preventDefault();
        let user = {id: this.state.id, name: this.state.name, type: this.state.type, password: this.state.password};
        console.log('User => ' + JSON.stringify(user));
        UserService.UpdateUser(user, user.id).then(res => {
            window.location.assign("/Users");
            });
    }
    cancel(){
        
    }



    render() {
        return (
            <div>
                <div className="container">
                <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3" style={{marginTop:'20px'}}>
                <h3 className="text-center">Update User</h3>
                <div className="card-body">
                <form>
                <div className="form-group">
                                            <input placeholder="ID" name="id" className="form-control" 
                                                value={this.state.id} onChange={this.changeidHandler} />
                                                
                    </div>
                    <div className="form-group">
                                            <input placeholder="Username" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changenameHandler}/>
                                                
                                                
                    </div>
                    <div className="form-group">
                                            <input placeholder="Type" name="type" className="form-control" 
                                                value={this.state.type} onChange={this.changetypeHandler}/>
                    </div>
                    <div className="form-group">
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changepasswordHandler}/>
                    </div>
                    <button className="btn btn-success" onClick={this.update} style={{marginLeft:"20px"}}>Save</button>
                    <Link to="/Users" style={{color:"transparent"}}> <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button></Link>
                </form>
                </div>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default UpdateUser;