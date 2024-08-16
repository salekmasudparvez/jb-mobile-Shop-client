import { AllCategoryCard } from "./AllCategoryCard";


const AllCategory = () => {
    return (
        <div className="w-full  md:px-8 px-3 md:py-6">
            <div className="w-full max-w-6xl mx-auto border-b-2 border-blue-500">
               <div className="bg-blue-500 ml-1 px-2 py-1 -skew-x-12 w-fit  text-white text-xl font-bold"> All category</div>
            </div>
            <div className="w-full max-w-6xl mx-auto flex gap-10 overflow-x-auto">
               <AllCategoryCard></AllCategoryCard>
               <AllCategoryCard></AllCategoryCard>
               <AllCategoryCard></AllCategoryCard>
               <AllCategoryCard></AllCategoryCard>
               <AllCategoryCard></AllCategoryCard>
               <AllCategoryCard></AllCategoryCard>
               <AllCategoryCard></AllCategoryCard>
            </div>
        </div>
    );
};

export default AllCategory;