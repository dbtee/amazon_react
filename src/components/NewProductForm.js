import React from "react";

function NewProductForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;

    const fd = new FormData(currentTarget);

    props.onSubmit({
      title: fd.get("title"),
      description: fd.get("description"),
      price: fd.get("price")
    });

    currentTarget.reset();
  }
  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Title</label>
        <input type="text" name="title" id="title" />
      </div>
      <div className="field">
        <label>Description</label>
        <textarea name="description" rows="2" id="description" />
      </div>
      <div className="field">
        <label>Price</label>
        <input type="integer" name="price" rows="1" id="price" />
      </div>
      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default NewProductForm;
