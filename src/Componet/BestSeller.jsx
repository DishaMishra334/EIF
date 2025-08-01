import React, { useContext, useEffect, useState } from 'react'
import Title from './Title';
import { ShopContext } from '../Context/ShopContext';
import Productitem from './Productitem';

const BestSeller = () => {

  const { products } = useContext(ShopContext);
  const [bestseller, setBestseller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => (item.bestseller));
    setBestseller(bestProduct.slice(0,10))
  }, [])
  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          jwdlscjwklpkjnkodkjfdepekoijfvkokcjndksldkjnvcdkdaoksjklsaklxcjnsa/czlxk.c
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6'>
        {
          bestseller.map((item,index) => (
            <Productitem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
          ))
        }
      </div>
    </div>
  )
}

export default BestSeller
