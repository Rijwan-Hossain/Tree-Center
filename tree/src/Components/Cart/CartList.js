import React, { Component } from 'react' 

class CartList extends Component { 
    render() { 
        let { tree, remove } = this.props 
        return ( 
            <div 
                style={{display: 'flex'}} 
                className="collection-item"> 
                <span style={{width: '20%'}}> 
                    <img 
                        src={tree.image} 
                        width="130px" 
                        alt={tree.name} /> 
                </span> 
                <h6 style={{width: '20%'}}> 
                    {tree.name} 
                </h6> 
                <h6 style={{width: '20%'}}> 
                    {tree.prize} 
                </h6> 
                <i 
                    style={{cursor: 'pointer'}} 
                    onClick={() => remove(tree.id)}
                    className="material-icons red-text"> 
                    delete_forever
                </i> 
            </div> 
        ) 
    } 
} 

export default CartList


