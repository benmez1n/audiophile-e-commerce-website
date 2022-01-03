import React , {useContext, useReducer, useState} from "react"
import reducer from "./reducer";
const AppContext = React.createContext();

const initialState = {
    cart:[],
    total:0,
    amount:0,
}

const AppProvider = ({children}) => {
    const [ state , dispatch ] = useReducer(reducer,initialState)
 
    //useReducer functions 

    const addToCart = (img,productName,price,amount) => {
        dispatch({type:"ADD_TO_CART",payload:{img,productName,price,amount}})
    }
    const clearCart = () => {
        dispatch({type:"REMOVE_ALL"})
    }
    const increase = () => {
        dispatch({type:"INCREASE"});
    }
    //Scroll to TOP 
    const toTop = () => {
        window.scrollTo({
            top:0,
            behavior : "smooth"
        })
    }

    // INCREASE/DECREASE ITEM
    const handleIncrease = (value) => {
        return value + 1
    }
    const handleDecrease = (value) => {
        if(value === 1 ) return 1
        return value - 1
    }

    return (
          <AppContext.Provider value={
                {   
                    ...state,
                    toTop,
                    handleDecrease,
                    handleIncrease,
                    addToCart,
                    clearCart,
                    increase,
                    }
                }
            >
              {children}
          </AppContext.Provider>
      )
} 
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext,AppProvider}