import { Form } from "react-bootstrap";
const Events = (props) => {
  function handleClick() {
    console.log("bosildi");
  }

  function handleSubmit(e) {
    e.preventDefault();

    e.target.reset();

    console.log("submitted");
  }

  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <button onClick={handleClick}>Meni bos</button>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            onChange={handleChange}
            placeholder="Card Number"
          />
          <button type="submit">Jo'natish</button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Events;
