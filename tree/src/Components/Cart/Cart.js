import React from 'react' 
import { connect } from 'react-redux' 
import CartList from './CartList' 
import { withRouter } from 'react-router-dom' 

function Cart(props) { 
    let { trees, remove } = props 

    let total = 0; 
    trees.map(tree => {  
        total += tree.prize  
    }) 
    
    return ( 
        <div className="container"> 
            <h3 className="center-align"> 
                Your Cart 
            </h3> 
            
            { 
                trees.length > 0 &&  
                <div 
                    className="hide-on-med-and-down"
                    style={{display: 'flex'}}> 
                    <h5 style={{width: '20%', marginLeft: '35px'}}>Products</h5> 
                    <h5 style={{width: '20%', marginLeft: '-10px'}}>Name</h5> 
                    <h5 style={{width: '20%', marginLeft: '-35px'}}>Prize</h5> 
                    <h5 style={{width: '20%', marginLeft: '-25px'}}>Remove</h5> 
                </div> 
            } 
            
            { 
                trees.length > 0 
                ? 
                <div className="collection"> 
                { 
                    trees.map(tree => { 
                        return ( 
                            <CartList 
                                tree={tree} 
                                remove={remove} 
                                key={tree.id} /> 
                        ) 
                    }) 
                } 
                </div> 
                : 
                <div> 
                    <h5 className="red-text text-darken-1">
                        Your cart is empty
                    </h5> 
                    <p>Add some product to the cart</p> 
                </div> 
            } 

            {
                trees.length > 0 && 
                <button 
                    onClick={() => props.history.push('/product')}
                    className="waves-effect waves-dark btn"> 
                    Continue Shoping 
                    <i className="material-icons left">keyboard_backspace</i> 
                </button> 
            } 

            { 
                trees.length > 0 &&  
                <h4>Total: {total} TK</h4> 
            } 
        </div> 
    ) 
} 

const mapStateToProps = (state) => { 
    return { 
        trees: state.cart 
    } 
} 

const mapDispatchToProps = (dispatch) => ({ 
    remove: (id) => dispatch({type: 'REMOVE_FROM_CART', payload: id}) 
}) 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart)) 
