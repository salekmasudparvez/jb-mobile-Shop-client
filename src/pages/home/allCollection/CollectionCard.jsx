import PropTypes from 'prop-types';
const CollectionCard = ({product}) => {
    const {name,imageURL,price,description}=product||{}
    return (
        <div className="w-[194px] cursor-pointer bg-white hover:shadow-md shadow-black hover:border-2">
            <img src={imageURL} alt="" />
            <div className="flex justify-center flex-col px-1 text-center">
                <h1 className="text-sm font-bold">{name}</h1>
                <p title={description} className="text-sm font-thin">{description?.slice(0,40)} ...</p>
            </div>
            <div className="text-sm text-red-500 font-bold text-center">TK {price}</div>
        </div>
    );
};
CollectionCard.propTypes={
    product:PropTypes.shape({
        name:PropTypes.string,
        imageURL:PropTypes.string,
        price:PropTypes.number,
        description:PropTypes.string
    })
}
export default CollectionCard;