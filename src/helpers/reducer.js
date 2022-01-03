const reducer = (state,action) => {
    if (action.type === 'ADD_TO_CART') {
        const isExist =  state.cart.some((item)=>action.payload.name === item.name)
        if(!isExist){
            const {img,productName,price,amount,storageID} = action.payload 
            localStorage.setItem(`${storageID}`,[img,productName,price,amount])
            return {...state,
                cart:[
                    ...state.cart,
                    {
                        name:productName,
                            img,
                            price,
                            amount,
                        },
                    ]
                }
            }
        else{
            return { ...state }
        }
    }

    else if(action.type === 'REMOVE_ALL') {
        return { ...state, cart: [] }
    }

    else if(action.type === "INCREASE"){
        return {
            ...state,
        }
    }

}
 
export default reducer;