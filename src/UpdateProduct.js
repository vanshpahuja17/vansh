import React from "react";
import { useState } from "react";

function UpdateProduct({update}) {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState(0);
  //   { id: 1, pname: "TV", company: "Samsung", model: "abcd", price: 29999 },

  const onSaveClick = (e) => {
    e.preventDefault();
    let newProduct = {};
    newProduct.id = 0;
    newProduct.id = Number(id);

    newProduct.pname = name;
    newProduct.company = company;
    newProduct.model = model;
    newProduct.price = price;

    console.log(newProduct);

    update(newProduct);
  };
  return (
    <div className="card p-5 m-5">
      <form>
        <div class="mb-3">
          <label class="form-label">ID</label>
          <input
            class="form-control"
            type="number"
            value={id}
            onChange={(event) => {
              setId(event.target.value);
            }}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Name</label>
          <input
            class="form-control"
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Company</label>
          <input
            class="form-control"
            type="text"
            value={company}
            onChange={(event) => {
              setCompany(event.target.value);
            }}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Model</label>
          <input
            class="form-control"
            type="text"
            value={model}
            onChange={(event) => {
              setModel(event.target.value);
            }}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Price</label>
          <input
            class="form-control"
            type="number"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </div>

        <button className="btn btn-success" onClick={onSaveClick}>
          Save
        </button>
      </form>
    </div>
  );
}

export default UpdateProduct;
