export const initialState = {
    basket:[{
        id:'123413525',
        title:'Mechanical Keyboard',
        price:11.96,
        rating:5,
        image:'https://images-na.ssl-images-amazon.com/images/I/71cngLX2xuL._AC_SL1500_.jpg'
    }],
    user:null,

};
/* Selector */
export const getBasketTotal = (basket) => 
basket?.reduce((amount,item) => item.price + amount,0);

const reducer = (state,action) => {

    switch(action.type){
        case 'ADD_TO_BASKET':
        return{
            ...state,
            basket:[...state.basket,action.item],
        };
        break;
        case 'REMOVE_FROM_BASKET':

            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if(index >= 0) {
                //item exist in basket, remove it...
                newBasket.splice(index,1);
            }
            else{
                console.warn(`Cant remove product (id: ${action.id}) as its not found in basket`);
            }
            return {
                ...state,
                basket:newBasket,
            }
        break;
        default:
            return state;
    }
}

export default reducer;