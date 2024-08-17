import CollectionCard from "./CollectionCard";
import { useState } from 'react';
import { Input, Spinner } from "@material-tailwind/react";
import React from "react";
import {
    Drawer,
    Button,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { AllCategoryCard } from "./AllCategoryCard";


const Collection = () => {
    const [open, setOpen] = useState(false);
    const closeDrawer = () => setOpen(false);
    const [search, setSearch] = useState('');
    const [itemPerPage, setItemPerPage] = useState(6);
    const { isLoading: countLoading, data: countProduct } = useQuery({
        queryKey: ['countProduct'],
        queryFn: async () => {
            const response = await axios.get('https://mobile-shop-pro.vercel.app/count');
            const data = response.data;
            return data;
        }
    })

    const { count = 0 } = countProduct || {}
    const numberOfPages = Math.ceil(count / itemPerPage);
    const pages = [...Array(numberOfPages).keys()];

    const [currentPage, setCurrentPage] = useState(0);
    const [AllBrand, setAllBrand] = useState("")
    const [AllCategory, setAlCategory] = useState("")
    const [getMaxprice, setGetMaxprice] = useState('')
    const [getMinprice, setGetMinprice] = useState('')
    const [tab, setTab] = useState('')
    // pagination start


    //console.log(countProduct)
    const handlePerPage = (e) => {
        const customItemPerPage = parseInt(e.target.value);
        setItemPerPage(customItemPerPage);
        setCurrentPage(0)
    }
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    // pagination end
    //tab start


    const { refetch, isLoading: productLOading, data: products } = useQuery({
        queryKey: ['Allproducts', search, currentPage, itemPerPage,tab,getMaxprice],
        queryFn: async () => {
            let uri = `https://mobile-shop-pro.vercel.app/products?page=${currentPage}&size=${itemPerPage}&tab=${tab}`
            if (search) {
                uri = `https://mobile-shop-pro.vercel.app/products?search=${search}&page=${currentPage}&size=${itemPerPage}&tab=${tab}`
            } else if (getMaxprice && getMinprice && AllCategory && AllBrand) {
                uri = `https://mobile-shop-pro.vercel.app/products?search=${search}&category=${AllCategory}&brand=${AllBrand}&minPrice=${getMinprice}&maxPrice=${getMaxprice}&page=${currentPage}&size=${itemPerPage}&tab=${tab}`
            }
            const response = await axios.get(uri);
            const data = response.data;
            return data;
        }
    })
    //tab end
    const handleSearch = (event) => {
        event.preventDefault();
        const searchValue = event.target.search.value;
        setSearch(searchValue)
        refetch()
        console.log(searchValue)
    }
    const handleFilter = (event) => {
        event.preventDefault();
        const minPrice = event.target.minPrice.value;
        const maxPrice = event.target.maxPrice.value;
        if (!AllCategory) {
            return toast.error('Please select a category')
        }
        if (!AllBrand) {
            return toast.error('Please select a brand')
        }
        if (!minPrice || !maxPrice) {
            return toast.error('Please select price range')
        }
        setGetMinprice(minPrice)
        setGetMaxprice(maxPrice)
        refetch()
        closeDrawer()
    }
    const { isLoading: categoryLoading, data: cateData } = useQuery({
        queryKey: ['getCategories'],
        queryFn: async () => {
            const response = await axios.get('https://mobile-shop-pro.vercel.app/category');
            const data = response.data;
            return data;
        }
    })
    const { isLoading: brandLoading, data: brandData } = useQuery({
        queryKey: ['Brands'],
        queryFn: async () => {
            const response = await axios.get('https://mobile-shop-pro.vercel.app/brands');
            const data = response.data;
            return data;
        }
    })

    if (brandLoading || categoryLoading || productLOading || countLoading) {
        return (<div className="flex justify-center items-center"><Spinner className="h-12 w-12" /></div>)
    }

    return (
        <>
            <div className="w-full  md:px-8 px-3 md:py-6">
                <div className="w-full max-w-6xl mx-auto border-b-2 border-blue-500">
                    <div className="bg-blue-500 ml-1 px-2 py-1 -skew-x-12 w-fit  text-white text-xl font-bold"> All category</div>
                </div>
                <div className="w-full max-w-6xl mx-auto flex gap-0 overflow-x-auto">
                   
                    <Button onClick={() => setTab('')} className={`w-16 cursor-pointer bg-white text-gray-800 h-16 border hover:shadow-md flex justify-center items-center ${tab === '' && 'bg-blue-500 text-white'}`}>
                        <h1>All</h1>
                    </Button>
                    {cateData?.map((cate, idx) => <AllCategoryCard
                        key={idx}
                        cate={cate}
                        setTab={setTab}
                        tab={tab}
                    >

                    </AllCategoryCard>)}
                </div>
            </div>
            <div className="w-full bg-blue-gray-50  md:px-8 px-3 md:py-6">
                <div className="w-full max-w-6xl mx-auto border-b-2 border-blue-500 flex justify-between">
                    <div className="bg-blue-500 md:ml-1 px-2 py-1 md:-skew-x-12 w-fit  text-white text-xl font-bold"> All collection</div>
                    <form className="hidden  rounded md:flex " onSubmit={handleSearch}>
                        <Input className="rounded-none  border bg-white" name="search" type="text" label="Search by name"></Input>
                        <button type="submit" className="bg-white  border-b-4 focus:border-b-0 hover:shadow-lg ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                        </button>
                    </form>
                    <button onClick={() => setOpen(!open)} className={`flex px-3 py-1 border border-white rounded hover:shadow gap-1 shadow-black  ${open ? 'bg-blue-300' : 'bg-blue-500'} text-white `}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                        </svg>
                        Filter
                    </button>
                </div>
                <div className="w-full bg-blue-500 max-w-6xl mx-auto  md:hidden flex justify-center items-center p-3">
                    <form className="rounded flex " onSubmit={handleSearch}>
                        <Input className="rounded-none  border bg-white" name="search" type="text" label="Search by name"></Input>
                        <button type="submit" className="bg-white  border-b-4 focus:border-b-0 hover:shadow-lg ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                        </button>
                    </form>
                </div>

                <div className="w-full py-3 max-w-6xl mx-auto grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 es place-items-center grid-cols-1  gap-2">

                    {products?.map((product, idx) => {
                        return (
                            <CollectionCard key={idx} product={product}></CollectionCard>
                        )
                    })}
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
                            <form onSubmit={handleFilter} className="flex justify-between flex-col gap-3">
                                <div className="flex justify-center items-center p-2">
                                    <h1 className="text-primary font-bold text-xl">Filter</h1>
                                </div>
                                <div className="">
                                    <select onChange={(e) => setAlCategory(e.target.value)} className="border border-gray-400 px-3 py-1 w-full" label="Select Category ">
                                        <option selected disabled >Select category</option>
                                        {cateData && cateData?.length > 0 ? (
                                            cateData?.map((cate, idx) => (
                                                <option key={idx} value={cate?.category}>
                                                    {cate?.category}
                                                </option>
                                            ))
                                        ) : (
                                            <option value="default">No categories available</option>
                                        )}
                                    </select>
                                </div>
                                <div className="">
                                    <select onChange={(e) => setAllBrand(e.target.value)} className="border border-gray-400 px-3 py-1 w-full" label="Select Brand ">
                                        <option selected disabled >Select Brand</option>
                                        {brandData && brandData?.length > 0 ? (
                                            brandData.map((brandSingle, idx) => (
                                                <option key={idx} value={brandSingle?.brand}>
                                                    {brandSingle?.brand}
                                                </option>
                                            ))
                                        ) : (
                                            <option value="default">No brand available</option>
                                        )}
                                    </select>
                                </div>
                                <div className="flex flex-col text-primary gap-1 justify-center items-center" >
                                    <h1>Price </h1>

                                    <Input name="minPrice" type="number" className="w-fit" label="min price" />
                                    <span>To</span>
                                    <Input name="maxPrice" type="number" className="w-fit" label="max price" />

                                </div>
                                <Button type='submit' className="bg-blue-500 text-white" fullWidth>Done</Button>
                            </form>
                        </div>
                    </Drawer>
                </React.Fragment>
                <div className='flex flex-col md:flex-row py-10 gap-7 justify-center items-center'>
                    <div className='flex gap-6'>
                        <a className="px-2 py-1 bg-blue-500 text-white rounded bg-first cursor-pointer" onClick={handlePrevPage}>Prev.</a>

                        {pages.map(page => <button
                            className={`btn btn-sm ${currentPage === page ? "bg-first cursor-pointer text-blue-500" : "cursor-pointer"}`}
                            onClick={() => setCurrentPage(page)}
                            key={page}
                        >{page}</button>)}
                        <a className="px-2 py-1 bg-blue-500 text-white rounded bg-first cursor-pointer" onClick={handleNextPage}>Next</a>
                    </div>
                    <div className="flex bg-neutral-300 p-2 rounded-md">
                        <div className="font-medium text-gray-600 font-serif">Item per page</div>
                        <select value={itemPerPage} onChange={handlePerPage} >
                            <option value="6">06</option>
                            <option value="9">09</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Collection;