import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";

export function Cart({cartOpen}) {
    const [openRight, setOpenRight] = React.useState(false);
    const { data } = useQuery({
        queryKey: ['cart'],
        queryFn: () => {
            // Fetch cart data from localStorage
            const cartData = localStorage.getItem('cart');
            return cartData ? JSON.parse(cartData) : [];
        },
    });
    
     console.log(data)
    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);

    return (
        <React.Fragment>
           {cartOpen && <div className={`fixed right-[5%] top-3/4`}>
                <button onClick={openDrawerRight} className="bg-gray-300 border-2 relative border-gray-300 rounded-full p-3 focus:border-black focus:border-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    <span className="bg-red-400 text-white p-1 -top-2 rounded-full absolute w-7 h-7">{data?.length-1}</span>
                </button>

            </div>}

            <Drawer
                placement="right"
                open={openRight}
                onClose={closeDrawerRight}
                className="p-4"
            >
             <div className="flex">
             <div className="flex justify-center items-center">
                <button className="text-xl border rounded px-3 py-1 shadow-md w-8 items-center justify-center flex">+</button>
                <h1 className="text-xl border rounded px-3 py-1 shadow-md w-8 items-center justify-center flex">12</h1>
                <button className="text-xl border rounded px-3 py-1 shadow-md w-8 items-center justify-center flex">-</button>
             </div>
             <div>
                <img src="" alt="" />
             </div>
             </div>
            </Drawer>

        </React.Fragment>
    );
}