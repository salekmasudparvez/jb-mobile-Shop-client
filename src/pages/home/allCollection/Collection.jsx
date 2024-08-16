import CollectionCard from "./CollectionCard";
import { useState } from 'react';
import { Select, Option, Input } from "@material-tailwind/react";
import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";


const Collection = () => {
    const [open, setOpen] = useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <div className="w-full bg-blue-gray-50  md:px-8 px-3 md:py-6">
            <div className="w-full max-w-6xl mx-auto border-b-2 border-blue-500 flex justify-between">
                <div className="bg-blue-500 ml-1 px-2 py-1 -skew-x-12 w-fit  text-white text-xl font-bold"> All collection</div>
                <button onClick={() => setOpen(!open)} className={`flex px-3 py-1 rounded hover:shadow gap-1 shadow-black  ${open ? 'bg-blue-300' : 'bg-blue-500'} text-white `}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                    </svg>
                    Filter
                </button>
            </div>
            {/* {open && <div className="bg-white w-full text-white max-w-6xl mx-auto" >
                <form className="flex justify-between">
                    <div className="">
                        <Select label="Select Category ">
                            <Option>Material Tailwind HTML</Option>
                            <Option>Material Tailwind React</Option>
                            <Option>Material Tailwind Vue</Option>
                            <Option>Material Tailwind Angular</Option>
                            <Option>Material Tailwind Svelte</Option>
                        </Select>
                    </div>
                    <div className="">
                        <Select label="Select Brand ">
                            <Option>Material Tailwind HTML</Option>
                            <Option>Material Tailwind React</Option>
                            <Option>Material Tailwind Vue</Option>
                            <Option>Material Tailwind Angular</Option>
                            <Option>Material Tailwind Svelte</Option>
                        </Select>
                    </div>
                    <div className="flex text-primary gap-1 justify-center items-center" >
                        <h1>Price </h1>
                        <Input size="lg" label="Input Large" />
                        <span>To</span>
                        <Input size="lg" label="Input Large" />
                    </div>
                </form>
            </div>} */}
            <div className="w-full py-3 max-w-6xl mx-auto grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 es place-items-center grid-cols-1  gap-2">
                <CollectionCard></CollectionCard>
                <CollectionCard></CollectionCard>
                <CollectionCard></CollectionCard>
                <CollectionCard></CollectionCard>
                <CollectionCard></CollectionCard>
                <CollectionCard></CollectionCard>
                <CollectionCard></CollectionCard>
                <CollectionCard></CollectionCard>
                <CollectionCard></CollectionCard>
            </div>
            <React.Fragment>

                <Drawer open={open} onClose={closeDrawer} className="p-4 ">

                    <div className="bg-white w-full text-primary max-w-6xl mx-auto relative" >
                        <div className="absolute right-0 top-1">
                            <button onClick={closeDrawer}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                            </button>
                        </div>
                        <form className="flex justify-between flex-col gap-3">
                            <div className="flex justify-center items-center p-2">
                                <h1 className="text-primary font-bold text-xl">Filter</h1>
                            </div>
                            <div className="">
                                <Select label="Select Category ">
                                    <Option>Material Tailwind HTML</Option>
                                    <Option>Material Tailwind React</Option>
                                    <Option>Material Tailwind Vue</Option>
                                    <Option>Material Tailwind Angular</Option>
                                    <Option>Material Tailwind Svelte</Option>
                                </Select>
                            </div>
                            <div className="">
                                <Select label="Select Brand ">
                                    <Option>Material Tailwind HTML</Option>
                                    <Option>Material Tailwind React</Option>
                                    <Option>Material Tailwind Vue</Option>
                                    <Option>Material Tailwind Angular</Option>
                                    <Option>Material Tailwind Svelte</Option>
                                </Select>
                            </div>
                            <div className="flex flex-col text-primary gap-1 justify-center items-center" >
                                <h1>Price </h1>

                                <Input type="number" className="w-fit" label="min price" />
                                <span>To</span>
                                <Input type="number" className="w-fit" label="max price" />

                            </div>
                            <Button type='submit' className="bg-blue-500 text-white" fullWidth>Done</Button>
                        </form>
                    </div>
                </Drawer>
            </React.Fragment>
        </div>
    );
};

export default Collection;