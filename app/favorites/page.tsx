'use client'

import React, { useState } from 'react';
import useCurrentStore from '@/components/store/store';
import CharacterCard from '@/components/characterCard';
import { ChevronLeft, ChevronRight } from '@/components/icons';
import Image from 'next/image';

export default function Page () {

  const { favorites } = useCurrentStore(); 
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage: number = 3; 
  
  const startIndex: number = currentPage * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentFavorites = favorites.slice(startIndex, endIndex);
  let amountFavorites: number = favorites.length;

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <> 
      <Image className='mx-auto mb-4' src='/favorites1.png' alt='pikle' width={400} height={250} />
      {favorites.length > 0 ?
        <>
          <div className='text-3xl text-greenad m-4'>You have added {amountFavorites} characters to your favorites:</div>
          <div className="w-full flex justify-center items-center">
              <button onClick={handlePrevPage} disabled={currentPage === 0}>
              <ChevronLeft className='w-36 h-36 text-greenad hover:text-green-700 cursor-pointer'/>
              </button>
              <div className="w-3/5 flex justify-center items-center">
                {currentFavorites.map((char) => {
                  return(
                    <div key={char.id} className="w-2/6 mx-2">
                      <CharacterCard 
                        id={char.id}
                        name={char.name}
                        image={char.image}
                        status={char.status} 
                        favorite={false}
                      />
                    </div>
                    )
                })}
            </div>
            <button onClick={handleNextPage} disabled={endIndex >= amountFavorites}>
              <ChevronRight className='w-36 h-36 text-greenad hover:text-green-700'/>
            </button>
          </div>
        </>
        :
        <div className='text-4xl grid grid-cols-2 justify-items-center m-auto my-4 gap-8'>
          <p className='w-2/4 self-center'>Oops, you haven`t added any characters to your favorites yet</p>
          <div>
              <Image src='/pikle.png' alt='pikle' height={250} width={250} />
          </div>
        </div>
      }
    </>
  );
};