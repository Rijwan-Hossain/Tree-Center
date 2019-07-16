import React, { Component } from 'react'
import M from '../../index' 

class ProductList extends Component { 
    state = { 
        btnValue: 'Add to cart', 
        isAdded: false
    } 

    componentDidMount() { 
        let elems = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(elems);
    } 

    buttonClicked = (tree) => { 
        this.props.addToCart(tree) 
        this.setState({ 
            btnValue: 'Added', 
            isAdded: true 
        }) 
    } 
    
    render() { 
        let { tree, love } = this.props 
        
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
                    { 
                        this.state.isAdded 
                        ?  
                        <button  
                            className="btn disabled">  
                            {this.state.btnValue} 
                        </button> 
                        : 
                        <button  
                            onClick={() => this.buttonClicked(tree)}  
                            className="waves-effect waves-light btn green darken-1"> 
                            {this.state.btnValue} 
                        </button> 
                    } 
                    </div> 
                </div> 
            </div> 
        ) 
    } 
} 
        
export default ProductList
