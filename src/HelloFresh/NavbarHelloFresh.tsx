import './NavbarHelloFresh.css'
import '../App.css'
import HelloFreshLogo from '../assets/image/hello-fresh-logo.png'

const NavbarHelloFresh = () => {
    return (
      <div className="navBarContainer">
        <img className='hello-fresh-logo' src={HelloFreshLogo} alt="hello fresh logo" />
        <p className='discount'>Discount successfully applied!</p>
        <button className='button redeem'>Redeem</button>
      </div>
    )
  }
export default NavbarHelloFresh;