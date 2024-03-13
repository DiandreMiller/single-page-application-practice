import './HelloFreshWhy.css'

const HelloFreshWhy = () => {
    return (
        <div>
            <section className="why-section">
                <h2 className="why-title">Why HelloFresh?</h2>
                <span className='foods'>
                    <img className='food-gif' src='https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_750/hellofresh_website/us/landing-pages/whyhf/Animation1.gif' alt='hello fresh meal'/>
                    <img className='food-gif' src='https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_375/hellofresh_website/us/landing-pages/whyhf/Animation2.gif' alt='hello fresh meal'/>
                    <img className='food-gif' src='https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_750/hellofresh_website/us/landing-pages/whyhf/Animation3.gif' alt='hello fresh meal'/>
                </span>
                <span className='why-words'>
                    <h4 className='why-titles' id='one'>TIME-SAVING SOLUTIONS</h4>
                    <p className='why-paragraph' id='p1'>Spend less time meal prepping and planning: Our 
                        easy-to-follow recipes come with pre-portioned 
                        ingredients so you can take back time for 
                        yourself.
                    </p>

                    <h4 className='why-titles' id='two'>OPTIONS ON OPTIONS</h4>
                    <p className='why-paragraph' id='p2'>Say goodbye to mealtime monotony! We've got so 
                        many mouthwatering recipes to choose from with 
                        options for every lifestyle.
                    </p>

                    <h4 className='why-titles' id='three'>GAME-CHANGING CONVENIENCE</h4>
                    <p className='why-paragraph' id='p3'>Skip trips to the grocery store and time spent 
                        waiting in line—with HelloFresh, delicious recipes
                        are just a click away. Plus, you can pause or 
                        cancel anytime.
                    </p>
                        
                </span>
            </section>
        </div>
    )
}

export default HelloFreshWhy;