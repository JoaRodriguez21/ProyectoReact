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
        <div>
            <h1 className='titleHomePage'>Apple Store</h1>
        </div>
        <div className='contImgLinks'>
            <Link to="/categoria/Iphone">
                <img className='imgLinks' src={PortIphone} alt="" />
            </Link>
            <Link to="/categoria/MacBook">
                <img className='imgLinks' src={PortMacBooks}/>
            </Link>
            <Link to="/categoria/AirPods">
                <img className='imgLinks' src={PortAirpods}/>
            </Link>
            <Link to="/categoria/Watch">
                <img className='imgLinks' src={PortWatch} alt="" />
            </Link>
        </div>
        <ProductosSection/>

    </section>
  )
}

export default HomePage;