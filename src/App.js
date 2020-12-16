import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { RootNavigator } from "./routes/RootNavigator";
import "./App.css";


class App extends Component {
  

  render() {
    return (
    
      <>
      
     
          <BrowserRouter>
            <RootNavigator />
          </BrowserRouter>

      </>
    );
  }
}

export default App;