import React from 'react' 
import Carosel from './Carosel/Carosel' 

function Home() { 
    return ( 
        <div> 
            <Carosel /> 
            <div style={{height: '70px'}}></div> 
            <blockquote className="container hide-on-med-and-down">
                <h3>Green Bangladesh, Beautiful Bangladesh</h3>
            </blockquote> 
            <blockquote className="container hide-on-large-only">
                <h5>Green Bangladesh, Beautiful Bangladesh</h5>
            </blockquote> 

            <div 
                style={{height: '50px'}} 
                className="footer-copyright grey darken-2">
                <div 
                    style={{lineHeight: '50px'}} 
                    className="container center-align white-text">
                    © 2019 Copyright Text 
                </div> 
            </div> 
        </div> 
    ) 
} 

export default Home; 

