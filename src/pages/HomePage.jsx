import React from 'react'
import { Link } from 'react-router-dom';
import ProductosSection from '../components/ItemListConteiner/ProductosSection';
import "./HomePage.css"
import PortIphone from "./Portadas/iphons.jpg"
import PortAirpods from "./Portadas/airpods.jpg"
import PortMacBooks from "./Portadas/macbooks.jpg"
import PortWatch from "./Portadas/watchs.png"

function HomePage() {
  return (
    <section className='contHomePage'>
        <div className='homeBackBlack'>
        <div>
            <h1 className='appleTitulo'>Apple Store</h1>
        </div>
        <div className='contImgLinks'>
                <Link to="/categoria/MacBook">
                    <img className='imgLinks' src={PortMacBooks}/>
                </Link>
                <Link to="/categoria/AirPods">
                    <div className='textAlingCenter'>
                        <img className='imgLinks airpodscenter' src={PortAirpods}/>
                    </div>
                </Link>
        </div>
            <div className='homeBackWithe'>
                <Link to="/categoria/Iphone">
                    <img className='imgLinks' src={PortIphone} alt="" />
                </Link>
                <Link to="/categoria/Watch">
                    <img className='imgLinks' src={PortWatch} alt="" />
                </Link>
            </div>
        </div>
        <ProductosSection/>
    </section>
  )
}

export default HomePage;