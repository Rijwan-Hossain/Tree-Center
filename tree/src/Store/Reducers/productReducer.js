
import one from '../../assets/images/1.jpg'
import two from '../../assets/images/2.jpg'
import three from '../../assets/images/3.jpg'
import four from '../../assets/images/4.jpg'
import five from '../../assets/images/5.jpg'
import six from '../../assets/images/6.jpg'
import seven from '../../assets/images/7.jpg'
import eight from '../../assets/images/8.jpg'
import nine from '../../assets/images/9.jpg'


const initState = [ 
    {id: 1, name: 'Knock out rose', prize: '400 TK',   image: one,    love: 10}, 
    {id: 2, name: 'Cypress Tree',   prize: '620 TK',   image: two,    love: 208}, 
    {id: 3, name: 'Flower Tree',    prize: '230 TK',   image: three,  love: 50}, 
    {id: 4, name: 'Oak Tree',       prize: '1350 TK',  image: four,   love: 0}, 
    {id: 5, name: 'Wisteria Tree',  prize: '2200 TK',  image: eight,  love: 250}, 
    {id: 6, name: 'Mango Tree',     prize: '175 TK',   image: six,    love: 31}, 
    {id: 7, name: 'House Plant',    prize: '350 TK',   image: seven,  love: 30}, 
    {id: 8, name: 'Oak Tree',       prize: '980 TK',   image: five,   love: 1}, 
    {id: 9, name: 'Dog Wood Tree',  prize: '1200 TK',  image: nine,   love: 20} 
] 

const productReducer = (state = initState, action) => { 
    if(action.type === 'LOVE') { 
        let updated_trees = state.map(tree => { 
            if(tree.id === action.payload) { 
                tree.love++ 
                return tree 
            } 
            else 
                return tree 
        }) 
        return updated_trees 
    } 
    return state 
} 

export default productReducer 
