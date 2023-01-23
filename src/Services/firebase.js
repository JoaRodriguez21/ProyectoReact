// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where} from "firebase/firestore";
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
    return snapshot.data()
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

export default db;