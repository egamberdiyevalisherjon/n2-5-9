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
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder="Card Number" />
        <button type="submit">Jo'natish</button>
      </form>
    </div>
  );
};

export default Events;
