import React from 'react';
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import Billing from '../components/Billing'
import Invoice from '../components/Invoice'

export const routes = [
    {path: "/" , component: Login, exact:true },
    {path: "/dashboard" , component: Dashboard, exact:true },
    {path: "/billing", component: Billing,exact:true},
    {path: "/invoice", component: Invoice,exact:true},


  
]