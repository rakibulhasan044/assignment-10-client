import offer from '../assets/offer.png'

const OrginalCollection = () => {
    return (
        <div className='grid grid-cols-2 gap-5 '>
            <div className='text-3xl font-bold flex items-center'>
                <div className='bg-[#E1DCD7] py-5 text-center w-full'>
                <p className='text-[#51473d]'>Our Latest Collection of</p>
                <p className='text-[#51473d]'>Original</p>
                <p>Artworks & Paintings</p>
                </div>
            </div>
            <div className=''>
            <img src={offer} className='' alt="" />
            </div>
        </div>
    );
};

export default OrginalCollection;