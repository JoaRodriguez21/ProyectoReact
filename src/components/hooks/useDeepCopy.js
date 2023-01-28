export function useDeepCopy(objViejo){
    let nuevObjeto = JSON.parse(JSON.stringify(objViejo));
    return nuevObjeto;
}
