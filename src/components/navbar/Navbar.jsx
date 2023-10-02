import React, {useState} from 'react'
import { RiMenu2Line  } from 'react-icons/ri';
import { FaPlus  } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  return (
    // <div className='navbar'> 
      <div className='navbar-menu'>
        <RiMenu2Line color='#000' size={20} />
        <div className='navbar-title'>
          <h4>Ah Counter</h4>
        </div>
        <FaPlus color='#000' size={20}/>
      </div>
    // </div>
  )
}

export default Navbar