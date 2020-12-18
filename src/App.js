import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { RootNavigator } from "./routes/RootNavigator";
import "./App.css";
import Navbar from '../src/components/Dashboard/navbar'


class App extends Component {
  

  render() {
    return (
    
      <>
      
    
          <BrowserRouter>
          
          <Navbar/>
            <RootNavigator />
          </BrowserRouter>

      </>
    );
  }
}

export default App;