
import PropTypes from 'prop-types';
import { Button } from 'react-day-picker';
export const AllCategoryCard = ({cate,setTab,tab}) => {
    const {category}= cate || {}
    return (
        <Button onClick={()=>setTab(category)} className={`w-16 rounded-sm cursor-pointer h-16 border  hover:shadow-md flex justify-center items-center ${tab===category ? 'bg-blue-500 text-white':'bg-white text-gray-800'}`}>
            <h1>{category}</h1>
        </Button>
    );
}
AllCategoryCard.propTypes={
    cate: PropTypes.object.isRequired,
    setTab:PropTypes.func.isRequired,
    tab: PropTypes.func.isRequired,

}