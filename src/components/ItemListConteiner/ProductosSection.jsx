import "./productosSection.css"
import ItemList from "./ItemList"

function ProductosSection() {
    return(
        <section className="contOfertas">
            <h1 className="tituloProductos">¡Productos!</h1>
            <div>
                <button>Iphone</button>
                <button>Watchs</button>
                <button>AirPods</button>
            </div>
            <ItemList />
        </section>
    )
}

export default ProductosSection;