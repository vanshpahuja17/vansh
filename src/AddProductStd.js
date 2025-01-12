import React from 'react';
import { useState } from 'react';

function AddProductStd({add}) {

    const [prod , setProd] = useState({
        id:0,
        pname:'',
        company:'',
        model:'',
        price:''
    })

    const handleChange=(e)=>{
        const {name,value} = e.target
        setProd((prev)=>({...prev, [name]:value}))
    }

    const onSaveClick=(event)=>{
        event.preventDefault();
        add(prod)
        setProd({
        id:0,
        pname:'',
        company:'',
        model:'',
        price:''
        })
    }

    return (
        <div className="card p-5 m-5">
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

export default AddProductStd;