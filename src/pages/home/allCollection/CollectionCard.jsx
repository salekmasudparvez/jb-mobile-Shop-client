import { differenceInDays, parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const CollectionCard = ({ product }) => {
    const { name, imageURL, price, description, rating, date ,_id} = product || {}
    const dateString = date
    const givenDate = parseISO(dateString)
    const today = new Date()
    const daysAgo = differenceInDays(today, givenDate);
    
    return (
        <Link to={`/details/${_id}`} className="md:w-[194px] h-[300px] relative cursor-pointer bg-white hover:shadow-md shadow-black hover:border-2">
            <div className='w-full flex justify-center items-center'>
                <img className='w-[194px] h-[194px] object-cover bg-white' src={imageURL} alt="" />
            </div>
            <div className='flex justify-center sm:text-sm text-xs items-center gap-1 text-yellow-700 border absolute top-1 px-2  bg-white rounded-3xl right-1'>
                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                </span>
                <span>{rating}</span>
            </div>
            <div className='flex sm:text-sm text-xs justify-center items-center gap-1 text-blue-500 border absolute top-1 px-2 bg-white rounded-3xl left-1'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </span>
                {daysAgo < 0 ? <span>Upcoming</span> : <span>{daysAgo}day ago</span>}
            </div>
            <div className="flex justify-center flex-col px-1 text-center">
                <h1 className="text-sm font-bold">{name}</h1>
                <p title={description} className="text-sm font-thin">{description?.slice(0, 40)} ...</p>
            </div>
            <div className="text-sm text-red-500 font-bold text-center">TK {price}</div>
        </Link>
    );
};
CollectionCard.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string,
        imageURL: PropTypes.string,
        price: PropTypes.number,
        description: PropTypes.string
    })
}
export default CollectionCard;