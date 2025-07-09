import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    // Destructure getCartTotalCount from ShopContext
    const { setshowSerach, getCartTotalCount } = useContext(ShopContext);
    const navigate = useNavigate();

    const handleSearchClick = () => {
        setshowSerach(true);
        navigate('/Collection');
    };

    return (
        <div className='flex items-center justify-between py-5 font-medium '>
            <Link to='/Home'><img src={assets.logo} className='w-40' alt="" srcSet="" /></Link>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700 '>
                <NavLink to='/Home' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                </NavLink>
                <NavLink to='/Collection' className='flex flex-col items-center gap-1'>
                    <p>COLLECTION</p>
                </NavLink>
                <NavLink to='/About' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                </NavLink>
                <NavLink to='/Contect' className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                </NavLink>
            </ul>
            <div className='flex items-center gap-6'>
                <img onClick={handleSearchClick} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

                <div className='group relative'>
                    <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>My profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/Cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="" srcSet="" />
                    {/* Display the cart count using getCartTotalCount() */}
                    {getCartTotalCount() > 0 && (
                        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
                            {getCartTotalCount()}
                        </p>
                    )}
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" srcSet="" />
            </div>
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/Home'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/Collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/About'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/Contect'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;