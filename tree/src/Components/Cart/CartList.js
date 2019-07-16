import React, { Component } from 'react' 

class CartList extends Component { 
    render() { 
        let { tree, remove, increase, decrease } = this.props 
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


                    <div style={{
                        display: 'flex', 
                        width: '20%', 
                        marginLeft: '-85px',
                        marginTop: '-5px'
                    }}>
                        <button 
                            onClick={() => increase(tree.id)}
                            className="btn blue darken-2 waves-effect"
                            style={{ 
                                height: '35px', 
                                margin: '10px' 
                            }}> 
                            + 
                        </button> 
                        <h6>{tree.buy}</h6> 
                        <button 
                            onClick={() => decrease(tree.id)}
                            className="btn blue darken-2 waves-effect"
                            style={{ 
                                height: '35px', 
                                margin: '10px' 
                            }}> 
                            - 
                        </button> 
                    </div> 




                    <i 
                        style={{cursor: 'pointer', marginLeft: '60px'}} 
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
                    <div style={{
                        display: 'flex', 
                        width: '20%'
                    }}>
                        <button 
                            onClick={() => increase(tree.id)}
                            className="btn blue darken-2 waves-effect"
                            style={{ 
                                height: '35px', 
                                margin: '10px' 
                            }}> 
                            + 
                        </button> 
                        <h6>{tree.buy}</h6> 
                        <button 
                            onClick={() => decrease(tree.id)}
                            className="btn blue darken-2 waves-effect"
                            style={{ 
                                height: '35px', 
                                margin: '10px' 
                            }}> 
                            - 
                        </button> 
                    </div> 
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


