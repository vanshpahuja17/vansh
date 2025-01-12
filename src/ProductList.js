import React from 'react';

function ProductList({prods, onEdit}) {

    return (
        <div className="card p-5 m-5">
           <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Company</th>
                <th>Model</th>
                <th>Price</th>
                <th></th>
            </tr>
            <tr>
                <td>{prods.id}</td>
                <td>{prods.pname}</td>
                <td>{prods.company}</td>
                <td>{prods.model}</td>
                <td>{prods.price}</td>
                <td><button onClick={()=>onEdit(prods)}>Edit ✏️</button></td>
            </tr>
           </table>
        </div>
    );
}

export default ProductList;