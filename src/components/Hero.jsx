import React from 'react';

import imageShop from '../../public/img/comprando.jpg';
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className=' bg-rose-50 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className="container mx-auto flex justify-around h-full">

        {/*Text*/}
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New trend
          </div>

          {/*Title*/}
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'><span>ECOMMERCE</span></h1>

          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>Discover more</Link>
        </div>

        {/*image*/}
        <div className='hidden lg:block'>
          <img className='h-full my-auto' src={imageShop} alt="" />
        </div>
      </div>

    </section>
  )
};

export default Hero;
