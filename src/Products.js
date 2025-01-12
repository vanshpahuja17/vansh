// import React from 'react';
import ProductList from './ProductList';
import React, { useState, useEffect } from "react";
import AddProduct from './AddProduct';
import DeleteProduct from './DeleteProduct';
import UpdateProduct from './UpdateProduct';
import AddProductStd from './AddProductStd';
import UpdateProductStd from './UpdateProductStd';
import { useContext } from 'react';
import { Usercontext } from './userContext';


const Products=()=> {

    

    const [products, setProducts] = useState([
        { id: 1, pname: "TV", company: "Samsung", model: "abcd", price: 29999 },
        { id: 2, pname: "Computer", company: "LG", model: "xyz", price: 30000 },
      ]);
      const value = useContext(Usercontext)
      console.log(value)

    //   const [addProduct,setAddProduct] = useState(false);


      const addProductNow = (p) => {
        setProducts((prevProducts) => [...prevProducts, p]);
      };

      const deleteProduct=(id)=>{
        setProducts((prevProducts)=>prevProducts.filter((product)=>product.id!=id))
      }
      
      const deleteProductSplice=(id)=>{
        let allProducts = [...products]
        let index = allProducts.indexOf(id);

        allProducts.splice(index,1)
        setProducts(allProducts)
      }

      const updateProduct = (p) => {
        console.log(p)
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id == p.id ? { ...product , ...p } : product
          )
        );
      }

      const [selectedProduct, setSelectedProduct] = useState(null);

      const handleEdit = (product) => {
        setSelectedProduct(product);
      };
    

    return (
        <div>
            <h3>List of Products</h3>
            {products.map((prod)=>{
              return(
              <ProductList prods={prod}  onEdit={handleEdit}/>
              );
            })}
            <h3>Add</h3>
            <AddProduct Add={addProductNow}/>
            <h3>Add Standard</h3>
            <AddProductStd add={addProductNow}/>
            <h3>Delete using Splice</h3>
            <DeleteProduct Delete={deleteProductSplice}/>
            <h3>Update</h3>
            <UpdateProduct update={updateProduct}/>

            <h3>Update Product Std</h3>
            {selectedProduct && <UpdateProductStd update={updateProduct} product={selectedProduct} refresh={setSelectedProduct} />}
            
        </div>
    );
}

export default Products;