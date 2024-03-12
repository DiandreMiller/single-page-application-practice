import './HelloFreshChart.css'
import HelloFreshLogo from '../assets/image/hello-fresh-logo.png'

const HelloFreshChart = () => {
    return (
        <div>
            <section className='chart-container'>
                <h2 className='lifestyle'>Built For Your Lifestyle</h2>
                <table className='actual-chart'>
                <img className='hello-fresh-logo1' src={HelloFreshLogo} alt="hello fresh logo" />
                <img className='shopping-cart' src='https://cdn.icon-icons.com/icons2/1369/PNG/512/-shopping-cart_90604.png' alt='shopping cart'/>
                <p className='local-store'>YOUR LOCAL GROCERY STORE</p>

                </table>
                
            </section>
        </div>
    )
}

export default HelloFreshChart;

