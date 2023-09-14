import React, {createContext, useEffect, useState} from 'react';


export const CartContext = createContext();


const CartProvider = ({children}) => {

   const [cart, setCart] = useState([]);

   const [itemAmount, setItemAmount] = useState(0);

   const [total, setTotal] = useState(0);

   useEffect(()=>{
    const total = cart.reduce((acum, curr)=>{
      return acum + curr.price * curr.amount
    }, 0);
    setTotal(total);
   })

   useEffect(()=>{
    if(cart){
      const amount = cart.reduce((acum, curr)=>{
        return acum + curr.amount;
      }, 0);
      setItemAmount(amount);
    }
   },[cart]);

  const addToCart = (product, id) => {

    const newItem = {...product, amount: 1};

    const cartItem = cart.find((item)=>{
      return item.id === id;
    });

    if(cartItem){
      const newCart = [...cart].map((item)=>{
        if(item.id === id){
          return { ...item, amount: cartItem.amount + 1 };
        }else{
          return item;
        }
      });
      setCart(newCart);
    }else{
      setCart([...cart, newItem]);
    }
  };

  const incAmount = (id) => {
    const cartItem = cart.find((item)=>{ item.id === id });
    addToCart(cartItem, id);
  }

  const decAmount = (id) =>{
    const cartItem = cart.find(item=> item.id === id);

    if(cartItem){
      const newCart = cart.map((item)=>{
        if(item.id === id){
          return {...item, amount: cartItem.amount - 1}
        }else{
          return item;
        }
      });
      setCart(newCart);
    }

    if(cartItem.amount < 2){
      removeCart(id);
    }


  }

  //remove from cart

  const removeCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id;
    });
    setCart(newCart);
  }

  const clearCart = () => {
    setCart([]);
  }




  return (
    <CartContext.Provider value={{cart, addToCart, removeCart, clearCart, decAmount, incAmount, itemAmount, setItemAmount, total}}>
      {children}
    </CartContext.Provider>

  );
};

export default CartProvider;
