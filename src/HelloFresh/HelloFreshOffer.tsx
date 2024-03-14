import './HelloFreshOffer.css'
import { Link } from 'react-router-dom';

const HelloFreshOffer = () => {
    return (
        // <div>
            <section className='offer-container'>
                <p className='offer-paragraph'>*Offer only valid for new customers with qualifying 
                    auto-renewing subscription purchase. ‘Get 16 Free 
                    Meals’ offer is based a total discount applied over 
                    a 9-week period for a 2-person, 3-recipe subscription.
                    Discount varies for other meal plans and sizes. 
                    ‘Free Dessert for Life’ offer is based on on a limit 
                    of one free dessert item added to any plan for as 
                    long as a customer remains active; if subscription 
                    is cancelled, this offer becomes invalid and will 
                    not be reinstated upon reactivation. Shipping fee 
                    applies on all deliveries after the first box. Not 
                    valid on premiums, meal upgrades, add-ons, taxes or 
                    shipping fees. May not be combined with gift cards or
                    any other promotion. No cash value. Void outside the 
                    U.S. and where prohibited. Offer cannot be sold or 
                    otherwise bartered. HelloFresh has the right to end or
                    modify any offer at any time. Additional restrictions
                    may apply. See <Link className='link' to='/hello-fresh'>https://www.hellofresh.com/termsandconditions</Link> for more
                    </p>
                    <hr />
                    
            </section>
            
        // </div>
    )
}

export default HelloFreshOffer;