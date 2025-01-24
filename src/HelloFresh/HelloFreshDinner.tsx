import './HelloFreshDinner.css'
import Dinner from '../assets/image/dinner.png'


const HelloFreshDinner = () => {
    return (
        <div className='full-container'>
            <section className="dinner-container">
                <img className="dinner" src={Dinner} alt="dinner"/>
            </section>
            <h2 className='decadence'>Decadence after dinner, on us. Order today 
                    and get free dessert for life.</h2>
            <button className='buttons'>Get Started</button>
        </div>
    )
}

export default HelloFreshDinner;