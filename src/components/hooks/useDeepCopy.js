export function useDeepCopy(objViejo){
    console.log("copiando carrito")
    let nuevObjeto = JSON.parse(JSON.stringify(objViejo));
    return nuevObjeto;
}