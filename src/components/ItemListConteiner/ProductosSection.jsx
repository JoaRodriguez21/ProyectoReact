import "./productosSection.css"
import ItemList from "./ItemList"

function ProductosSection() {
    return(
        <section className="contOfertas">
            <h1 className="tituloProductos">¡Nuestros Productos!</h1>
            <ItemList />
        </section>
    )
}

export default ProductosSection;