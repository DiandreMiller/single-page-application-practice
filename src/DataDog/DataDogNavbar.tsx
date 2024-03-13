import searchGlass from '../assets/image/search-icon.png'
import dataDogLogo from '../assets/image/data-dog-logo.png'
import './DataDogNavbar.css'

const DataDogNavBar = () => {
    return (
        <div>
            <nav className='overall-container'>
                <section  className='first-header-container'>
                     <h3 className='cloud-security'>Read the 2023 State of Cloud Security Study!</h3>
                </section>
                
                <span className='second-header-container'>
                    <section className='left-of-dog'>
                     <p>PRODUCT</p>
                     <p>CUSTOMERS</p>
                     <p>PRICING</p>
                     <p>SOLUTIONS</p>
                     <p>DOC</p>
                     </section>
                     <img className='data-dog-logo' src={dataDogLogo} alt='data dog logo' />

                     <section className='right-of-dog'>
                         <p>ABOUT</p>
                         <p>BLOG</p>
                         <p>LOGIN</p>
                         <img className='search' src={searchGlass} alt='search-icon'/>
                         <input className='free-button' type='button' value='GET STARTED FREE' />
                     </section>
                     
                </span>
                
            </nav>
        </div>
    )
}

export default DataDogNavBar;