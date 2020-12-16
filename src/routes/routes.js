import React from 'react';
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'

export const routes = [
    {path: "/" , component: Login, exact:true },
    {path: "/dashboard" , component: Dashboard, exact:true },
  
]