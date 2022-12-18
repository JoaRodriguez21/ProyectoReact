import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function ButtonCategories() {
  return (
    <Dropdown as={ButtonGroup}>
      <Button variant="success">Categorias</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-3">Notebooks</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Oficina</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Estudios</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Diseño</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Gamer</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ButtonCategories;