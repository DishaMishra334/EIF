import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'
import Productitem from './Productitem'

const LetestCollection = () => {
    const { products } = useContext(ShopContext)
    const [latestproducts,setLatestProducts] = useState([]);
    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
            <Title text1={'VEGGIES'} text2={' and FRUITS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-800' >
             Cultivating and Curating Veggies and Fruits Packed with Bioactive Compounds, Ensuring Every Bite Fuels Your Well-being.
            </p>
      </div>
      {/* Rendering Product */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
       {
        latestproducts.map((item,index)=>(
          <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
        ))
       }
      </div>
    </div>
  )
}

export default LetestCollection;
