import { Heart } from 'lucide-react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import ReactPaginate from 'react-paginate';

const Wallpapers = ({ filterData }) => {
  const router = useRouter();
  const [activeIndices, setActiveIndices] = useState([]);

  useEffect(() => {
    if (filterData && filterData.length > 0) {
      setActiveIndices(filterData.map(() => 0)); 
    }
  }, [filterData]);

  const handleColorClick = (colorIndex, productIndex) => {
    const updatedIndices = [...activeIndices];
    updatedIndices[productIndex] = colorIndex; 
    setActiveIndices(updatedIndices);
  };

  const handlebuynow = (Id) => {
    router.push(`/product/${Id}`);
  };

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-2 h-[600px] overflow-y-scroll no-scrollbar mt-10 place-items-center'>
        {filterData &&
          filterData.map((product, ind) => (
            <div key={product.Id} className='h-auto w-[250px] shadow-lg rounded-xl p-2'>
              <div className='relative top-5 flex justify-end mb-4 p-2'>
                <Heart className='cursor-pointer' />
              </div>

              {product.colorinput && product.colorinput[activeIndices[ind]] && (
                <div className='flex justify-center items-center w-full h-[250px] mt-5'>
                  <img
                    src={product.colorinput[activeIndices[ind]].image2}
                    alt='Wallpaper'
                    className='object-contain w-full h-full rounded-xl'
                  />
                </div>
              )}

              <div className='mt-2 flex flex-row gap-2 ml-3'>
                {product.colorinput?.map((item, index) => (
                  <div
                    key={index}
                    className={`flex w-5 h-5 rounded-full ${
                      index === activeIndices[ind] ? 'border-2 border-gray-500' : ''
                    }`}
                    onClick={() => handleColorClick(index, ind)}
                  >
                    <img
                      src={item.image}
                      alt={`Color ${index + 1}`}
                      className='w-full h-full object-cover rounded-full'
                    />
                  </div>
                ))}
              </div>

              <div className='mt-2'>
                <div className='flex flex-row mt-2 gap-2'>
                  <p className='border-r-2 pr-2 text-sm'>{product.productname.toUpperCase()}</p>
             
                  <p className='text-sm'>
                    {product.colorinput && product.colorinput[activeIndices[ind]]?.patternno}
                  </p>
                </div>

                <p className='text-xs text-zinc-400 font-bold mt-2'>
                  {product.productdetails?.substring(0, 50)}...
                </p>
              </div>

              <div className='flex flex-row mt-2 gap-2'>
                <p className='border-r-2 pr-2 text-sm'>₹ {product.offerprice}/Roll</p>
                <p className='text-sm'>₹ {product.offerpricesqft} Sq.ft</p>
              </div>

              <div className='flex flex-row justify-between mt-2'>
                <button
                  className='rounded-xl bg-green-300 mt-2 p-2'
                  onClick={() => handlebuynow(product.Id)}
                >
                  Buy now
                </button>
              </div>
            </div>
          ))}
      </div>


    </div>
  );
};

export default Wallpapers;