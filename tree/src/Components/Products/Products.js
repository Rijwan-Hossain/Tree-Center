import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from './ProductList';

class Products extends Component { 
    render() { 
        let { trees, love, addToCart } = this.props; 
        return ( 
            <div>
                <div className="container"> 
                    <h1 className="center-align blue-text text-darken-2"> 
                        Our Products 
                    </h1> 
                    <div className="row"> 
                    { 
                        trees.map(tree => { 
                            return ( 
                                <ProductList 
                                    key={tree.id} 
                                    tree={tree} 
                                    addToCart={addToCart} 
                                    love={love} /> 
                            ) 
                        }) 
                    } 
                    </div> 
                </div> 
                <div 
                    style={{height: '50px'}}
                    className="footer-copyright grey darken-2">
                    <div 
                        style={{lineHeight: '50px'}} 
                        className="container center-align white-text">
                        © 2019 Rijwan Hossain
                    </div> 
                </div> 
            </div>
        ) 
    } 
} 

const mapStateToProps = (state) => { 
    return { 
        trees: state.products 
    } 
} 

const mapDispatchToProps = (dispatch) => ({ 
    love: (id) => dispatch({type: 'LOVE', payload: id}), 
    addToCart: (tree) => dispatch({type: 'ADD_TO_CART', payload: tree}) 
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Products) 

