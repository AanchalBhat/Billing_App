
import React from 'react';
import {routes} from "./routes";
import {Route,Switch} from 'react-router-dom';
 
export const RootNavigator=()=>(
 
    <Switch >{
      routes.map((d)=>{
        return <Route key={d.path} path={d.path} component={d.component}
        {...d}
        />
      })

    }
       
    </Switch >
   
)
