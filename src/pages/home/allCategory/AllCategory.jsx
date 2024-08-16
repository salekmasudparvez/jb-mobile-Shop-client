import { useQuery } from "@tanstack/react-query";
import { AllCategoryCard } from "./AllCategoryCard";
import axios from "axios";


const AllCategory = () => {
    const { data: cateData } = useQuery({
        queryKey: ['allCategory'],
        queryFn: async () => {
            const response = await axios.get('http://localhost:5000/category');
            const data = response.data;
            return data;
        }
    })
    //console.log(cateData)
    return (
        <div className="w-full  md:px-8 px-3 md:py-6">
            <div className="w-full max-w-6xl mx-auto border-b-2 border-blue-500">
                <div className="bg-blue-500 ml-1 px-2 py-1 -skew-x-12 w-fit  text-white text-xl font-bold"> All category</div>
            </div>
            <div className="w-full max-w-6xl mx-auto flex gap-0 overflow-x-auto">
                <button className="w-16 h-16 border hover:shadow-md flex justify-center items-center">
                    <h1>All</h1>
                </button>
                {cateData?.map((cate, idx) => <AllCategoryCard
                    key={idx}
                    cate={cate}
                >

                </AllCategoryCard>)}
            </div>
        </div>
    );
};

export default AllCategory;