import { useState } from "react";
import PropTypes from 'prop-types';

const CartCalculator = ({ singleData, handleDataRefetch }) => {
  
    const {
        imageURL,
        name,
        price
    } = singleData || {}
 
    const handleClearCart = (name) => {
        const cart = JSON.parse(localStorage.getItem('cart'))
        const updateCart = cart.filter(getItem =>{
           return getItem?.name !== name
        } )
        localStorage.setItem('cart', JSON.stringify(updateCart))
        handleDataRefetch()
        
    }
    return (
        <div className="flex justify-center items-center border px-2 relative">
            <div className="flex justify-center items-center">
                
                <h1 className="text-sm border rounded px-2 py-1 shadow-mditems-center justify-center flex">{price}TK</h1>
               
            </div>
            <div className="text-xs">{name}</div>
            <div>
                <img className="h-20" src={imageURL} alt={name} />
            </div>
            <button onClick={() => handleClearCart(name)} className="absolute top-1 right-1 bg-white rounded-full border">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
};
CartCalculator.propTypes = {
    singleData: PropTypes.object,
    refetch: PropTypes.func
}
export default CartCalculator;