import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'
import { Switch, Route, Link } from "react-router-dom";
import Booklist from './Componets/Booklist';
import Addbook from './Componets/Addbook';
import Login from './Componets/Login';
import Register from './Componets/Register';
import Navbar from './Componets/Navbar'
import Details from './Componets/Details'
import BookContextProvider from './context/BookContext';

function App() {
  return (
   
    <BookContextProvider>
    <div>
     
      <Navbar/>
      </div>
      <Switch>
              <Route exact path="/" component={Booklist}/>
              <Route exact path="/Book" component={Booklist}/>
              <Route path="/Addbook" component={Addbook}/>
              <Route path="/Login" component={Login}/>
              <Route path="/Register" component={Register}/>
              <Route path="/Details/:title?">
                            <Details/>
                    </Route>

     </Switch>
   </BookContextProvider>
 
  );
}

export default App;
