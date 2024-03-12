import './HelloFreshChart.css'
import HelloFreshChartImage from '../assets/image/hello-fresh-chart.png'


const HelloFreshChart = () => {
    return (
        <div>
            <section className='chart-container'>
                <h2 className='lifestyle'>Built For Your Lifestyle</h2>
                <img className='chart-image' src={HelloFreshChartImage} alt='chart'/>
                
            </section>
        </div>
    )
}

export default HelloFreshChart;

