const getTotal = (arr) => {
  const totalPrice = 0;
};
export const reducer = (state, action) => {
  // ADD TO CART
  if (action.type === "ADD_TO_CART") {
    const { img, productName, price, amount } = action.payload;

    let isExist = null;

    if (state.cart.length) {
      const items = state.cart.map((item) => {
        return item.name;
      });
      isExist = items.some((item) => item === action.payload.productName);
    }

    if (!isExist || !state.cart.length) {
      const totalAmount = state.cart.length ? state.amount + amount : amount;

      const totalPrice = state.total + amount * price;

      return {
        ...state,
        cart: [
          ...state.cart,
          {
            name: productName,
            img,
            price,
            amount,
          },
        ],
        amount: totalAmount,
        total: totalPrice,
      };
    } else if (isExist) {
      
      const itemsAmount = 0;
      const totalCount = 0;

      const items = state.cart.filter(
        (item) => item.name !== productName
      );
      
      items.forEach((element) => {
        totalCount += element.price;
        itemsAmount += element.amount * element.price;
      });

      const totalPrice = state.cart.length
            ? totalCount + amount * price
            : amount * price;

      const totalAmount = state.cart.length ? itemsAmount + amount : amount;

      return {
        ...state,
        cart: [
          ...items,
          {
            name: productName,
            img,
            price,
            amount,
          },
        ],
        amount: totalAmount,
        total: totalPrice,
      };
    } else {
      return { ...state };
    }
  } 


  //CLEAR CART
  else if (action.type === "REMOVE_ALL") {
    return { cart: [], amount: 0, total: 0 };
  } 


  // INCREASE
  else if (action.type === "INCREASE") {
    let totalIncrease
    let tempCart = state.cart.map((item) => {
      if (item.name === action.payload.productName) {
        totalIncrease = item.price
        return { ...item, amount: item.amount + 1 }
      }
      return item
    })
    return { ...state, 
            cart: tempCart ,
            amount : state.amount+1,
            total : state.total + totalIncrease
          }
  }

  // DECREASE
  else if (action.type === "DECREASE") {
    let totalDecrease = 0
    let tempCart = state.cart.map((item) => {
      if (item.name === action.payload.productName) {
          totalDecrease = item.price
          return { ...item, amount: item.amount - 1} 
      }
      return item
    })
    .filter(item=> item.amount !== 0)
    return { ...state,
       cart: tempCart ,
       amount : state.amount - 1,
       total : state.total - totalDecrease
      }
  }

};
