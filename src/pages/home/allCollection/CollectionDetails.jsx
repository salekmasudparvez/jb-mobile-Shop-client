import { Spinner } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Cart from "../../../components/cart/Cart";


const CollectionDetails = () => {
    const { id } = useParams();
    const [cartOpen, setCartOpen] = useState(false)
    const { isLoading, data: Product } = useQuery({
        queryKey: ['productDetails'],
        queryFn: async () => {

            const response = await axios.get(`https://mobile-shop-pro.vercel.app/details/${id}`);
            const data = response.data;
            return data;
        }
    })

    const { name, imageURL, price, description, rating, date } = Product || {};


    const { refetch, data } = useQuery({
        queryKey: ['cart'],
        queryFn: () => {
            // Fetch cart data from localStorage
            const cartData = localStorage.getItem('cart');
            return JSON.parse(cartData)||[]
        },
    });
    const handleCart = (product) => {
        const cart = localStorage.getItem('cart');
        console.log(cart)

        if (cart) {

            const updatedCart = JSON.parse(cart);
            updatedCart.push(product);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            setCartOpen(true);

        } else {

            localStorage.setItem('cart', JSON.stringify([product]));
            setCartOpen(true);
        }
        refetch()
    };
    
    const handleDataRefetch = () => {
        refetch();
    }
    if (isLoading) return (<div className="flex justify-center items-center"><Spinner className="h-12 w-12" /></div>);
    return (
        <div className="w-full md:p-10 p-5">
            <div className="flex justify-center items-center gap-4  md:flex-row flex-col">
                <div className="md:w-1/2 w-full">
                    <img className="w-full" src={imageURL} />
                </div>
                <div className="md:w-1/2 w-full px-3">
                    <div className="space-y-3">
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <h2><span className="font-semibold">Price :</span> {price} TK</h2>
                        <p><span className="font-semibold">Description:</span> {description}</p>
                        <p><span className="font-semibold">Rating:</span>  {rating}</p>
                        <p><span className="font-semibold">Added Date :</span>  {new Date(date).toLocaleDateString()}</p>
                        <button onClick={() => handleCart(Product)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
                    </div>
                </div>
            </div>
            <Cart
                cartOpen={cartOpen}
                data={data}
                handleDataRefetch={handleDataRefetch}
            ></Cart>
        </div>

    );
};

export default CollectionDetails;