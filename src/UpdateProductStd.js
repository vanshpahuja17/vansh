import React from 'react';
import { useState } from 'react';

function UpdateProductStd({update , product , refresh}) {

    const [prod,setProd] = useState({
        id: product.id,
        pname: product.pname,
        company:product.company,
        model:product.model,
        price:product.price
    })

    const handleChange=(e)=>{
        const {name, value } = e.target
        setProd((prevProduct) => ({...prevProduct,[name]:value}))
    }

    const onSaveClick=(e)=>{
        e.preventDefault();
        update(prod)
        refresh(null)
    }

    return (
        <div>
            {/* {JSON.stringify(prod)} */}
            <form>
                <div class="mb-3">
                    <label>id</label>
                    <input class="form-control" type="number" name="id" value={prod.id} onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label>pname</label>
                    <input class="form-control" type="text" name="pname" value={prod.pname} onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label>company</label>
                    <input class="form-control" type="text" name="company" value={prod.company} onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label>Model</label>
                    <input class="form-control" type="text" name="model" value={prod.model} onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label>Price</label>
                    <input class="form-control" type="number" name="price" value={prod.price} onChange={handleChange}></input>
                </div>
                <button onClick={onSaveClick}>Save</button>
            </form>
        </div>
    );
}

export default UpdateProductStd;