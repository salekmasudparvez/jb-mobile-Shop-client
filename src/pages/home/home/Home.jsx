import AllCategory from "../allCategory/AllCategory";
import Collection from "../allCollection/Collection";



const Home = () => {
    return (
        <div className="py-8 space-y-8 ">
            <AllCategory></AllCategory>
            <Collection></Collection>
        </div>
    );
};

export default Home;