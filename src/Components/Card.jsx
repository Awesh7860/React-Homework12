import React from 'react'

const Card = ({image,title,price}) => {
  return (
    <div className='card'>
        <img src={image} alt="" />
        <h4>
        {title}
        </h4>
        <p>${price}</p>
        <button>Buy</button>
    </div>
  )
}

export default Card