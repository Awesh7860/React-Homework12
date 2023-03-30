
import React,{useState,useEffect} from 'react'
import Card from './Card'
const Home = () => {
    const [product,setProduct]=useState([])
    useEffect(()=>{
      const productDetails=async()=>{
        const response=await fetch("https://fakestoreapi.com/products")
        const data=await response.json()
        setProduct(data)
      }
      productDetails()
      console.log(product)
    },[])
  return (
    

    <div className='home'>
     {
        product.map((i)=>
        <Card image={i.image} title={i.title} price={i.price}/>
        )
     }
    </div>
  )
}

export default Home