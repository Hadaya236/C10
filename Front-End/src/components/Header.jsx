import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
    constructor(props){
        super(props)

        this.state ={

        }
    }
    render() {
        const button ={
            backgroundColor:"transparent",
            color:"white",
            outline:"none",
            border:"none",
        

        };
        return (
            <div>
              <header className="header">
                <nav className="navbar navbar-expand-lg navbar-blue bg-blue">
                <div className="navbar-brand" style={button}>User Management App</div>
              
               <ul className="menu"> 
              <li className="item"><Link to = "/Users"><button style={button}>Home</button></Link></li>
              <li className="item"><Link to = "/AddUser/"><button style={button}>AddUser</button></Link></li>
              <li className="item"><Link to = "/UpdateUser"><button style={button}>UpdateUser</button></Link></li>
              </ul>
                </nav>
               


            
                </header>  
            </div>
        );
    }
}

export default Header;