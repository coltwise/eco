import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { FaSearch } from "react-icons/fa";


const Navbar = () => {

  const handleCLick = () => {
    alert('clicked')
  }
  return (
     <nav className='flex justify-between items-center bg-[#FFFFFF] '>
      <Link to='/' href="#" className='flex items-center gap-5 ml-10 hover:border-2 border-indigo-200'>
        
        <img className='w-12' src="https://banner2.cleanpng.com/20180519/jjs/kisspng-e-commerce-logo-electronic-business-5b00d2d0918d84.2335269315267806245962.jpg" alt="" />
        <span className='font-bold text-lg text-blue-700'>e-commerce</span>
        
      </Link>
      

      <div id='nav-menu' className='flex p-2 gap-5 mr-10 '>
       
        <Link to="/Login" className='hover:border-2 border-indigo-200'>
        <FaRegUserCircle size={30} hover:color='#5AB2FF'/>Login</Link>
        <Link className='hover:border-2 border-indigo-200' to="/CartPage">
        <FaCartArrowDown size={30} hover:color='#5AB2FF' />Cart</Link>
        
<Link to='/' className='hover:border-2 border-indigo-200'>
        <MdOutlineContactSupport size={30} hover:color='#5AB2FF '/>Support
        </Link>

       </div>

       <button className='p-1 md:hidden' onClick={handleCLick}>
       <IoMenu />
       </button>
       
     </nav>


    // <div>
    // <div className='flex justify-between gap-20 p-3  bg-[#F6F7C4] text-black font-semibold z-10'>
    //   <div className='flex float-right gap-20'>
    //   <Link to='/ProductPage'>ProductPage</Link>
    //   <Link to='/cart'><IoCartOutline size={25}/>
    //   </Link>
    //   <Link to='/Login'>Login/Register </Link>
      
    //   </div>
    //   <Link to='/' className='float-end'>ShoppingWindow.com</Link>
    // </div>
    
    // </div>
  )
}

export default Navbar
