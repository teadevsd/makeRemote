import './Nav.css'
import Hamburger from '../assets/svg/icon-menu.svg'

function Nav() {

    return (
      <>
        <div className="navBar">
            <div className='topNav'>
                <h1>Snap</h1>
        
                <ul className='navContainer'>
                    <li className='NavList'>Features</li>
                    <li className='NavList'>Company</li>
                    <li className='NavList'>Careers</li>
                    <li className='NavList'>About</li>
                </ul>
            </div>    

          <div className='logButtons'>
            <button className='login'>Login</button>
            <button className='register'>Register</button>
          </div>

          <img className='Hamburger' src={Hamburger} alt="" />
  
        </div>
          
      </>
    )
  }
  
  export default Nav
  