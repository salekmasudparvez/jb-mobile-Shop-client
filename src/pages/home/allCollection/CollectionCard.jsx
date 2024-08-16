
const CollectionCard = () => {
    return (
        <div className="w-[194px] bg-white hover:shadow-md shadow-black hover:border-2">
            <img src="https://www.ryans.com/storage/products/small/lenovo-thinkbook-15-g2-itl-intel-core-i5-1135g7-71722138733.webp" alt="" />
            <div className="flex justify-center flex-col px-1 text-center">
                <h1 className="text-sm font-bold">Professional Latop</h1>
                <p className="text-sm font-thin">Lenovo ThinkBook 15 G2 ITL Intel Core i5 1135 ...</p>
            </div>
            <div className="text-sm font-bold text-center">TK 1212</div>
        </div>
    );
};

export default CollectionCard;