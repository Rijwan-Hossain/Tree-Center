import React, { Component } from 'react'

import M from '../../../index'; 

import one from '../../../assets/images/carosel/one.jpg'; 
import two from '../../../assets/images/carosel/two.jpg'; 
import three from '../../../assets/images/carosel/three.jpg'; 


class Carosel extends Component { 
   componentDidMount() { 
      var elems = document.querySelectorAll('.slider'); 
      var instances = M.Slider.init(elems); 
   } 

   render() { 
      return ( 
         <div className="slider"> 
            <ul className="slides"> 
               <li> 
                  <img src={one} /> 
                  <div className="caption right-align hide-on-med-and-down"
                     style={{ width: '400px', marginTop: '-90px', marginLeft: '650px' }}> 
                     <h1>Green Roof</h1> 
                  </div> 
               </li> 
               <li> 
                  <img src={two} /> 
                  <div className="caption right-align black-text">
                     <h2 className="brown-text darken-4 hide-on-med-only">
                        Save tree today,
                    </h2>
                     <h2 className="brown-text darken-4 hide-on-med-only">
                        It will save tomorrow
                    </h2>
                  </div> 
               </li> 
               <li> 
                  <img src={three} /> 
               </li> 
            </ul> 
         </div> 
      ) 
   } 
} 

export default Carosel; 

