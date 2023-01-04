import { findByLabelText } from "@testing-library/react";



function ItemListCont(props){
    
    return(
        <div>
            <h2>{props.greeting}</h2>
        </div>
    );
}

export default ItemListCont;