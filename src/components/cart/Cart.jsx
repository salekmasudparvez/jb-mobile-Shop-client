import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import CartCalculator from "./CartCalculator";

export function Cart({cartOpen,data}) {
    const [openRight, setOpenRight] = React.useState(false);
   
    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);

    return (
        <React.Fragment>
           {cartOpen && <div className={`fixed right-[5%] top-3/4`}>
               
                <button onClick={openDrawerRight} className="bg-gray-300 border-2 relative border-gray-300 rounded-full p-3 focus:border-black focus:border-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    <span className="bg-red-400 text-white p-1 -top-2 rounded-full absolute w-7 h-7">{data?.length}</span>
                </button>

            </div>}

            <Drawer
                placement="right"
                open={openRight}
                onClose={closeDrawerRight}
                className="p-4"
            >
                 <h1 className=" px-2 py-4 text-xl font-bold text-center">Cart</h1>
             <div className="flex flex-col">
                {data?.map((singleData,idx)=><CartCalculator
                 key={idx} 
                 singleData={singleData}></CartCalculator>)}
             <CartCalculator></CartCalculator>
             <div>
                <img src="" alt="" />
             </div>
             </div>
            </Drawer>

        </React.Fragment>
    );
}