import React, { Component } from 'react' 

class CartList extends Component { 
    render() { 
        let { tree, remove } = this.props 
        return ( 
            <div>
                <div 
                    style={{display: 'flex'}} 
                    className="collection-item hide-on-med-and-down"> 
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


                {/* small device */}
                <div 
                    style={{margin: '20px'}}
                    className="hide-on-large-only">
                    <span> 
                        <img 
                            src={tree.image} 
                            width="80px" 
                            alt={tree.name} /> 
                    </span> 
                    <h6> 
                        Name: {tree.name} 
                    </h6> 
                    <h6> 
                        Prize: {tree.prize} 
                    </h6> 
                    <span style={{fontSize: '18px'}}>Remove:</span> <i 
                        style={{ 
                            cursor: 'pointer'
                        }} 
                        onClick={() => remove(tree.id)} 
                        className="material-icons red-text md-48"> 
                        delete_forever 
                    </i> 
                    <div style={{height: '30px'}}></div> 
                </div> 
            </div> 
        ) 
    } 
} 

export default CartList


