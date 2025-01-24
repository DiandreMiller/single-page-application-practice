import NavbarHelloFresh from "./NavbarHelloFresh";
import HelloFreshMain from "./HelloFreshMain";
import HelloFreshChart from "./HelloFreshChart";
import HelloFreshWhy from "./HelloFreshWhy";
import HelloFreshRecipes from "./HelloFreshRecipes";
import HelloFreshDinner from "./HelloFreshDinner";
import HelloFreshOffer from "./HelloFreshOffer";
import HelloFreshFooter from "./HelloFreshFooter";



const HelloFreshHome= () => {
    return (
        <div>
            <NavbarHelloFresh />
            <HelloFreshMain />
            <HelloFreshChart />
            <HelloFreshWhy />
            <HelloFreshRecipes />
            <HelloFreshDinner />
            <HelloFreshOffer />
            <HelloFreshFooter />
        </div>
    )
}

export default HelloFreshHome;