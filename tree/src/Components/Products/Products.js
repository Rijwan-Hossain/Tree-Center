import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from './ProductList';

class Products extends Component { 
    render() { 
        let { trees, love } = this.props; 
        return ( 
            <div className="container"> 
                <h1 className="text-center">Our Products</h1> 
                <div className="row"> 
                { 
                    trees.map(tree => { 
                        return ( 
                            <ProductList 
                                key={tree.id} 
                                tree={tree} 
                                love={love} /> 
                        ) 
                    }) 
                } 
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
    love: (id) => dispatch({type: 'LOVE', payload: id}) 
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Products) 

