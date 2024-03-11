import './NavbarHelloFresh.css'

const NavbarHelloFresh = () => {
    return (
      <div className="navBarContainer">
        <img className='hello-fresh-logo' src='https://cdn.mos.cms.futurecdn.net/oYpPSTxAmoJg3FkhdwbiF3-1200-80.jpg' alt="hello fresh logo" />
        <p className='discount'>Discount successfully applied!</p>
        <button className='button redeem'>Redeem</button>
      </div>
    )
  }
export default NavbarHelloFresh;