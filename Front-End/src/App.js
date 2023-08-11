
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserList from './components/UserList';
import Header from './components/Header';
import Footer from './components/Footer';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (

    <div>
      <Router>
         <Header/>
          <div className="container">
            <Routes> 
              <Route path="/" exact element = {<UserList/>}></Route>
              <Route path="/Users" exact element = {<UserList/>}></Route>
              <Route path="/AddUser/" exact element = {<AddUser/>}></Route>
              <Route path="/UpdateUser/" exact element ={<UpdateUser/>}></Route>
             </Routes>
          </div>
         <Footer/>
      </Router>
    </div>

    
  );
}

export default App;
