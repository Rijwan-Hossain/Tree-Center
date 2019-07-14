import React, { Component } from 'react'
import M from '../../index' 

class ProductList extends Component { 
    componentDidMount() { 
        let elems = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(elems);
    } 

    render() { 
        let { tree, love, addToCart } = this.props 
        
        return ( 
            <div className="col s12 m6 l4"> 
                <div className="card"> 
                    <div className="card-image"> 
                        <img 
                            src={ tree.image } 
                            height="300px" 
                            className="materialboxed"
                            alt="tree" /> 
                        <span style={{background: 'rgba(0, 0, 0, 0.4)', width: '100%'}} className="card-title"> 
                            { tree.name } 
                        </span> 
                        <a 
                            onClick={() => love(tree.id)}
                            className="btn-floating halfway-fab waves-effect waves-dark red"> 
                            <i className="material-icons"> 
                                favorite 
                            </i> 
                        </a> 
                    </div> 
                    <div className="card-content"> 
                        <p>{tree.love} people loved it</p> 
                        <h6> 
                            Prize: {tree.prize} TK
                        </h6> 
                    </div> 
                    <div className="card-action"> 
                        <button 
                        onClick={() => addToCart(tree)}
                            className="waves-effect waves-light btn green darken-1">
                            Add to cart 
                        </button> 
                    </div> 
                </div> 
            </div> 
        ) 
    } 
} 
        
export default ProductList
