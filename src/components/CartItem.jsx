import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {

  const { removeCart } = useContext(CartContext);

  const { id, title, image, price, amount } = item;

  return (

    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>

      <div className='w-full min-h-[150px] flex items-center gap-x-4'>

        {/*image */}
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt='' />
        </Link>

        {/*title and icon for delete */}
        <div className='w-full flex flex-col'>

          <div className='flex justify-between mb-2'>
            {/*title */}
            <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>{title}
            </Link>

            {/*remove icon */}
            <div onClick={() => { removeCart(id) }} className='text-x1 cursor-pointer'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
            </div>

          </div>

          {/*amount */}
          <div className='flex gap-x-2 h-[36px] text-sm'>
            {/*qtfy*/}
            <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
              {/*minus icon */}
              <div className='flex-1'>
                <IoMdRemove />
              </div>

              {/*amount*/}
              <div className='h-full flex justify-center items-center px-2'>
                {amount}
              </div>

              {/*pluss icon*/}
              <div className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                <IoMdAdd />
              </div>
            </div>
            {/*item price*/}
            <div className='flex-1 flex items-center justify-around '>$ {price}</div>
            {/*item price*/}
            <div className='flex-1 flex justify-end items-center text-primary font-medium'>{`$ ${parseFloat(item.price * amount).toFixed(2)}`}</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartItem;
