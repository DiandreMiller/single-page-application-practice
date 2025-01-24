import './HelloFreshRecipes.css'

const HelloFreshRecipes = () => {

    return (
        <div>
            <section className="recipe-section-container">
                <section className='recipe-title'>
                    <h2 className="45-recipes">45+ recipes and 100+ seasonal and convenience 
                    items each week.</h2>
                </section>
                <section className='february-section'>
                    <p className='february'>February menu highlights:</p>
                </section>
                    <span className="recipe-span-container">
                        <img src="https://img.hellofresh.com/q_60,w_828,f_auto,c_limit,fl_lossy/hellofresh_s3/image/65c24e7c606e44bed253820a-b4d1558c.jpeg" className="recipe" alt="food" />
                        <img src="https://img.hellofresh.com/q_60,w_828,f_auto,c_limit,fl_lossy/hellofresh_s3/image/642aec6997220935fa0e8500-8479acd2.jpg" className="recipe" alt="food" />
                        <img src="https://img.hellofresh.com/q_60,w_828,f_auto,c_limit,fl_lossy/hellofresh_s3/image/64107ffbc10333201c02a6bf-7b35f735.jpg" className="recipe" alt="food" />
                    </span>
                    <span className='titles'> 
                        <h4 className='tit'>Crispy Buffalo-Spiced Chicken</h4>
                        <h4 className='tit dos'>Beef Flautas Supreme</h4>
                        <h4 className='tit tres'>Saucy Pork Burrito Bowls</h4>
                    </span>
                    <span className='paragraphs'>
                        <p className='para'>with Blue Cheese Sauce, Scallions Mashed Potatoes & Carrots</p>
                        <p className='para'>with Pico de Gallo & Smoky Red Pepper Crema</p>
                        <p className='para'>with Charred Green Pepper, Salsa Fresca & Smoky Crema</p>
                    </span>
            </section>
        </div>
    )

    
                        

}

export default HelloFreshRecipes;