import ironhackLogo from '../assets/ironhack-logo-xs.png';
import menuTop from '../assets/menu-top-xs.png';

function Navbar() {
  return (
    <div className='navbar'>
      <img src={ironhackLogo} alt='ironhacklogo' />
      <img src={menuTop} alt='menu' className='menu' />
    </div>
  );
}

export default Navbar;
