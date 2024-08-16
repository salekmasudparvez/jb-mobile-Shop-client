
import PropTypes from 'prop-types';
export const AllCategoryCard = ({cate}) => {
    const {category}= cate || {}
    return (
        <button className="w-16 h-16 border hover:shadow-md flex justify-center items-center">
            <h1>{category}</h1>
        </button>
    );
}
AllCategoryCard.propTypes={
    cate: PropTypes.object.isRequired,
}