import React from "react";
import { useState } from "react";

function DeleteProduct({Delete}) {
  const [id, setId] = useState(0);

    const onDeleteClick=(e)=>{
        e.preventDefault();
        Delete(id)
    }

  return (
    <div>
      <div>

        <label>Enter Id you want to delete</label><br></br>
        <input
          class="form-control"
          type="number"
          value={id}
          onChange={(event) => {
            setId(event.target.value);
          }}
        />
        <button onClick={onDeleteClick}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteProduct;
