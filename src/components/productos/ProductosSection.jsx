import "./productosSection.css"
/* componentes */

/* img productos */
import imgPcDiseño from"./FotosProductos/computadoraDiseño.png"
import imgPcGamer from "./FotosProductos/computadoraGamer.png"
import imgPcEscritorio from"./FotosProductos/computadoraEscritorio.png"
import imgPcOfice from "./FotosProductos/computadoraOfice.png"
import Card from "./productos"

function ProductosSection() {
    return(
        <section className="contOfertas">
            <h2>¡Ofertas!</h2>
            <div className="productosContainer">
                <Card img={imgPcOfice} categoria={"Computadoras"}  title={"PC de oficina"} stock={5} descuento={40000} precio={35000} />
                <Card img={imgPcEscritorio} categoria={"Computadoras"}  title={"PC de escritorio"} stock={6} descuento={55000} precio={40000} />
                <Card img={imgPcGamer} categoria={"Computadoras"} title={"PC Gamer"} stock={3} descuento={90000} precio={80000} />
                <Card img={imgPcDiseño} categoria={"Computadoras"}  title={"PC Diseño"} stock={2} descuento={95000} precio={85000} />
            </div>
        </section>
    )
}

export default ProductosSection;