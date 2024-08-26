import { useState } from "react";


const CartCalculator = ({ singleData }) => {
    const [count, setCount] = useState(0);
    const {
        imageURL,
        name,
        price,
        rating } = singleData || {}
    const decrease = () => {
        if (count < 1) {
            setCount(0)
        } else {
            setCount(count - 1)
        }
    }
    return (
        <div className="flex justify-center items-center border px-2">
            <div className="flex justify-center items-center">
                <button onClick={() => setCount(count + 1)} className="text-xl border rounded px-3 py-1 shadow-md w-8 items-center justify-center flex">+</button>
                <h1 className="text-xl border rounded px-3 py-1 shadow-md w-8 items-center justify-center flex">{count}</h1>
                <button onClick={() => decrease()} className="text-xl border rounded px-3 py-1 shadow-md w-8 items-center justify-center flex">-</button>
            </div>
            <div className="text-xs">{name}</div>
            <div>
                <img className="h-20" src={imageURL} alt={name}  />
            </div>
        </div>
    );
};

export default CartCalculator;