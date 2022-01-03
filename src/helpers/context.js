import React , {useContext, useReducer, useState} from "react"
import {reducer as reducer} from "./reducer";
const AppContext = React.createContext();

const init = {
    cart:[],
    total:0,
    amount:0,
}

const AppProvider = ({children}) => {
    const [ state , dispatch ] = useReducer(reducer,init)
 

    //ALERT 
    const alert = (text,msg) => {
        const alert = document.querySelector(".alert")
        const paragraph = document.querySelector(".alert p:last-child")
        alert.classList.add("show")
        document.querySelector(".alert p:first-child").textContent = text 
        if(msg) {
            document.querySelector(".alert span").textContent = msg
            paragraph.textContent = "' was added to cart"
        }
        else{
            document.querySelector(".alert span").textContent = ""
            paragraph.textContent = ""
        }
        setTimeout(() => {
            alert.classList.remove("show") 
        }, 2000);
    }

    //UseReducer functions 

    const addToCart = (img,productName,price,amount,setCount) => {
        dispatch({type:"ADD_TO_CART",payload:{img:`../${img}`,productName,price,amount}})
        alert("Item '",productName)
        setCount(1)
    }

    const clearCart = () => {
        dispatch({type:"REMOVE_ALL"})
        alert("Cart is empty",null)
    }

    const increase = (productName) => {
        dispatch({type:"INCREASE",payload:{productName}});
    }

    const decrease = (productName) => {
        dispatch({type:"DECREASE",payload:{productName}});
    }

    //Scroll to TOP 
    const toTop = () => {
        window.scrollTo({
            top:0,
            behavior : "smooth"
        })
    }

    return (
          <AppContext.Provider value={
                {   
                    ...state,
                    toTop,
                    addToCart,
                    clearCart,
                    increase,
                    decrease,
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