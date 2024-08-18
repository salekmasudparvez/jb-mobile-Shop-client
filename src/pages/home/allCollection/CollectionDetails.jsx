import { Spinner } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";


const CollectionDetails = () => {
    const { id } = useParams();
    const { isLoading, data: Product } = useQuery({
        queryKey: ['productDetails'],
        queryFn: async () => {

            const response = await axios.get(`http://localhost:5000/details/${id}`);
            const data = response.data;
            return data;
        }
    })
   
    const { name, imageURL, price, description, rating, date, _id } = Product || {};

    if (isLoading) return (<div className="flex justify-center items-center"><Spinner className="h-12 w-12" /></div>);
    return (
        <div className="w-full md:p-10 p-5">
            <div className="flex justify-center items-center gap-4 ">
                <div className="md:w-1/2 w-full">
                    <img src={imageURL} />
                </div>
                <div className="md:w-1/2 w-full">
                   <div>
                    <h1>{name}</h1>
                    <h2>$ {price}</h2>
                    <p>{description}</p>
                    <p>Rating: {rating}</p>
                    <p>Added on: {new Date(date).toLocaleDateString()}</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
                   </div>
                </div>
            </div>
        </div>
       
    );
};

export default CollectionDetails;