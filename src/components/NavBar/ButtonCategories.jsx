import Dropdown from 'react-bootstrap/Dropdown';
 
function DropCategories() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Computadoras
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Computadoras Gamer</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Computadoras Diseño</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Computadoras Oficina</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Computadoras Hogar</Dropdown.Item>
            
            </Dropdown.Menu>
    </Dropdown>
    );
  }
  
  export default DropCategories;