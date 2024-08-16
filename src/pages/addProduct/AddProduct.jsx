import { Avatar, Button, Input, Spinner, Textarea } from "@material-tailwind/react";
import {
    Popover,
    PopoverHandler,
    PopoverContent,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const AddProduct = () => {
    const [date, setDate] = useState("");
    //console.log(date)
    const [category, setCategory] = useState("");

    const handleProduct = async (e) => {
        e.preventDefault();
        const image = e.target.image.files[0];
        console.log(e.target.image.files)
        const productName = e.target.pName.value;
        const brandName = e.target.bName.value;
        const price = e.target.price.value;
        const productDescription = e.target.pDescription.value;
        console.log(category)

        if (!productName) {
            return toast.error('Product name is required')
        }
        if (!brandName) {
            return toast.error('Brand name is required')
        }
        if (!price || isNaN(price)) {
            return toast.error('Price is required and should be a number')
        }
        if (!category) {
            return toast.error('Category is required')
        }
        if (!date) {
            return toast.error('Date is required')
        }
        if (!productDescription) {
            return toast.error('Product description is required')
        }
        if (!image) {
            return toast.error('Image is required')
        }

        try {
            const formData = new FormData();
            formData.append('image', image);
            const res = await axios.post('http://localhost:5000/imageUpload', formData)
            const imageURL = res?.data.imageUrl
            const newProduct = {
                name: productName,
                brand: brandName,
                imageURL,
                price: price,
                category,
                description: productDescription,
                date
            }
            const response = await axios.post('http://localhost:5000/productUpload', newProduct);
            if (response.data) {
                toast.success('Product added successfully')
                console.log(response.data)
            }
        } catch (error) {
            toast.error(error.message || 'Error adding product')
        }
    }
    const { isLoading, data: cateData } = useQuery({
        queryKey: ['allCategories'],
        queryFn: async () => {
            const response = await axios.get('http://localhost:5000/category');
            const data = response.data;
            return data;
        }
    })

    if (isLoading) {
        return <div className="flex justify-center items-center ">
            <Spinner className="h-10 w-10" />
        </div>
    }

    return (
        <div className="py-8">
            <div className="w-full max-w-6xl mx-auto border-b-2 border-blue-500">
                <div className="bg-blue-500 ml-1 px-2 py-1 -skew-x-12 w-fit  text-white text-xl font-bold"> Add production</div>
            </div>
            <form onSubmit={handleProduct} className="max-w-6xl space-y-4 mx-auto py-8 px-3 bg-blue-50 rounded-b-2xl">
                <div className="flex gap-2  md:flex-row flex-col">
                    <Input name="pName" label="Product name"></Input>
                    <Input name="bName" label="Brand name"></Input>
                </div>
                <div className="flex gap-2 md:flex-row flex-col justify-between items-center">
                    <select
                     className="bg-blue-50 rounded-lg p-2 focus:outline-none lg:w-1/2 w-full  border border-gray-500"
                        onChange={(e) => setCategory(e.target.value)}
                        
                    >
                        <option selected disabled >Select category</option>
                        {cateData && cateData.length > 0 ? (
                            cateData.map((cate, idx) => (
                                <option key={idx} value={cate?.category }>
                                    {cate?.category}
                                </option>
                            ))
                        ) : (
                            <option value="default">No categories available</option>
                        )}

                    </select>

                    <div className="lg:w-1/2 w-full">
                        <Popover placement="bottom">
                            <PopoverHandler>
                                <Input
                                    label="Select a Date"
                                    onChange={() => null}
                                    value={date ? format(date, "PPP") : ""}
                                />
                            </PopoverHandler>
                            <PopoverContent>
                                <DayPicker
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    showOutsideDays
                                    className="border-0"
                                    classNames={{
                                        caption: "flex justify-center py-2 mb-4 relative items-center",
                                        caption_label: "text-sm font-medium text-gray-900",
                                        nav: "flex items-center",
                                        nav_button:
                                            "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                                        nav_button_previous: "absolute left-1.5",
                                        nav_button_next: "absolute right-1.5",
                                        table: "w-full border-collapse",
                                        head_row: "flex font-medium text-gray-900",
                                        head_cell: "m-0.5 w-9 font-normal text-sm",
                                        row: "flex w-full mt-2",
                                        cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                        day: "h-9 w-9 p-0 font-normal",
                                        day_range_end: "day-range-end",
                                        day_selected:
                                            "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                                        day_today: "rounded-md bg-gray-200 text-gray-900",
                                        day_outside:
                                            "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                                        day_disabled: "text-gray-500 opacity-50",
                                        day_hidden: "invisible",
                                    }}
                                    components={{
                                        IconLeft: ({ ...props }) => (
                                            <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                                        ),
                                        IconRight: ({ ...props }) => (
                                            <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                                        ),
                                    }}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                </div>
                <div className="flex gap-2 justify-between items-center md:flex-row flex-col">

                    <div className="flex justify-center items-center border-2 border-dashed ">
                        <input name="image" accept="image/*" type="file" className="file-input w-full max-w-xs" />
                        <div>
                            <Avatar src={''} variant="rounded" />
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <Input name="price" className="w-full" type="number" label="Price"></Input>
                    </div>
                </div>
                <div>
                    <Textarea name="pDescription" label="Product description" />
                </div>
                <div>
                    <Button type="submit" className="bg-blue-gray-500" fullWidth>Upload </Button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;