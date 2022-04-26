import React from 'react'
import { useState,useEffect } from 'react';
export const Products = () => {
    const [data, setdata] = useState([]);
    const [filter, setfilter] = useState(data);
    const [loading, setloading] = useState(false);
    let componentMount =true;
    useEffect(() => {
      const getProducts=async()=>{
        setloading(true);
        const response=await fetch('https://fakestoreapi.com/products/1')
        if (componentMount){
          setdata(await response.clone().json());
          setfilter (await response.json());
          setloading(false);
          console.log(filter);
        }
        return()=>{
          componentMount(false)
        }
      }
     getProducts()
    }, []);
  return (
    <div className="container my-5 py-5">
        <div className="row">
        <div className="col-12 mb-5">
        <h1 className="display -6 fw-bolder
        text-center">test produit</h1>
        </div>
        </div>
    </div>
  )
}
