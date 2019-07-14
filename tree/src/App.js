import React, { Component } from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navigation from './Components/Navigation/Navigation'
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import Cart from './Components/Cart/Cart'

class App extends Component { 
  render() { 
    return ( 
      <BrowserRouter> 
      <Navigation /> 
       <Switch> 
         <Route path="/" component={ Home } exact /> 
         <Route path="/product" component={ Products } /> 
         <Route path="/cart" component={ Cart } /> 
         <Route component={ Error } /> 
       </Switch> 
     </BrowserRouter> 
    ) 
  } 
} 

export default App; 

