import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './NavbarStyles.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import myLogo from '../assests/logo5.png';
const Navbar = () => {
    const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className='header'>
        <Link to='/'><img src={myLogo} alt=""/></Link>
        <ul className={click ?'nav-menu active': 'nav-menu'}>
            <li>
                <Link to='/'>Home</Link>
            </li>

            <li>
                
                <Link to='/projects'>Projects</Link>
            </li>

            <li>
                <Link to='/rent'>Rent</Link>
            </li>

            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color:'#black'}}/>): (<FaBars size={20} style={{color:'#black'}}/>)}
            
        </div>
    </div>
  )
}

export default Navbar
