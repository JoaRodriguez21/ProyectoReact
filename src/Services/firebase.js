// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, writeBatch, documentId} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD5RCvLOQOgSZsjuHDuq9HJ-CObBAXM8I",
  authDomain: "applestorejoarod.firebaseapp.com",
  projectId: "applestorejoarod",
  storageBucket: "applestorejoarod.appspot.com",
  messagingSenderId: "655119350924",
  appId: "1:655119350924:web:70a5249bfaf307d8ea4fa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

//async await
export async function productosApple(){
    const productosRef = collection(db, "productosApple");
    const snapshot = await getDocs(productosRef)
    
    const productosApple = snapshot.docs.map((elem) => {
    let producto = elem.data()
    producto.id = elem.id;
    return producto;
});
    return productosApple;
}

export async function getProducto(idParams){
    const productosRef = collection(db, "productosApple")
    const docRef = doc(productosRef, idParams)
    const snapshot = await getDoc(docRef);
    return {...snapshot.data(), id: snapshot.id}
}

export async function getProdByCategory(categoriaUrl){
    const productosRef = collection (db, "productosApple")

    const q = query(productosRef, where("categoria", "==", categoriaUrl))
    const snapshot = await getDocs(q);

    const productos = snapshot.docs.map((elem) => {
        let producto = elem.data();
        producto.id = elem.id;
        return producto
    });
    return productos;
}

//exportar orden
/* export async function createOrder(order){
    const orderRef = collection(db, "order");
    let respuesta = await addDoc(orderRef, order);
  console.log(respuesta, respuesta.id);
  return respuesta.id;
} */


//exportar order && control de stock
export async function createOrderStockControl(order){
    const orderRef = collection(db, "order")
    const productosRef = collection(db, "ProductosApple")
    //1. creamos un lote o batch de escritura
    const batch = writeBatch(db);
    
    //2 Actualizar item
    //2.2 listado de items count - stock
    const baseIds = order.items.map((item) => item.id);
    //2.3 obtengo de firebase la data
    const q = query(productosRef, where(documentId(), "in", baseIds));
    const querySnapshot = await getDocs(q);
    const docsToUpdate = querySnapshot.docs;

    //2.4 Generar un array vacio para colocar los items que no tengan stock
    let itemsSinStock = [];

    //3 Por cada documento en la BD comprobar si hay suficiente stock
    docsToUpdate.forEach((doc) => {
        let stock = doc.data().stock;
        console.log(stock)
        //3.2 encontramos el item "iterado"
        let itemInCart = order.items.find( item => item.id === doc.id);
        let countInCart = itemInCart.count;
        console.log(countInCart)

        //3.3 calcular la cantidad resultante
        let newStock = stock - countInCart;
        console.log(newStock)

        //4 validamos si hay stock
        if(newStock < 0){
            itemsSinStock.push(doc.id)
            throw new Error(`Stock no disponible para el/los producto/s ${itemsSinStock}`)
        } else {
            batch.update( doc.ref, { stock: newStock })
        }
    });

    //5 Armamos un error para mostrarle al usuario en el caso de no haber stock
    if(itemsSinStock.length >= 1) {
        throw new Error(`Stock no disponible para el producto ${itemsSinStock}`)
    };

    //5.2 Hacemos un "commit" del batch y realizamos los cambios
    await batch.commit()
    //6 Generamos la orden de compra OPERACIONES ACID
    let newOrder = await addDoc(orderRef, order);
    return newOrder.id;
}
    export default db;