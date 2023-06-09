import {Form} from "react-bootstrap";
function SelectCategorias({ categorias }) {
  return (
    <Form.Group controlId="categoria">
      <Form.Label>Categoría:</Form.Label>
      <Form.Control as="select">
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
}

export default SelectCategorias;