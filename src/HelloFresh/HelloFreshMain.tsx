import './HelloFreshMain.css';
import '../App.css';
import './NavbarHelloFresh';
import NavbarHelloFresh from './NavbarHelloFresh';
import chocolateCake from '../assets/image/chocolate-cake.png';
import HelloFreshChart from './HelloFreshChart';
import HelloFreshWhy from './HelloFreshWhy';

const HelloFreshMain = () => {
    return (
        <div>
            <NavbarHelloFresh />
            <main className="main-container">
                <span className="left-container">
                    <h3 className='treats'>Treats on Repeat</h3>
                    <p className='meal-kit'>Enjoy America's #1 Meal Kit, now with <strong>16 free meals <br/>and free 
                        dessert for life.*</strong></p>
                    <button className='button explore'>Explore Plans</button>
                    <p className='discount-paragraph'>
                        *Applied as discount across 9 boxes, new subscriptions 
                        only, and varies by plan. One free dessert item per 
                        box with an active subscription.</p>
                </span>
                <span className="right-container">
                    <h2 className='free one'>FREE</h2>
                    <h2 className='dessert'>DESSERT</h2>
                    <img className='chocolate-cake' src={chocolateCake} alt='chocolate-cake'/>
                    <h2 className='free two'>FOR LIFE</h2>
                    <span className='sticker-container'>
                        <h3 className='sticker'>NEW!</h3>
                    </span>
                </span>
            </main>
            <HelloFreshChart />
            <HelloFreshWhy />
        </div>
    );
};

export default HelloFreshMain;
