'use client'

import React, { useEffect, useState }from 'react';
import { useQuery } from '@tanstack/react-query'; 
import CharacterCard from '@/components/characterCard';
import Service from '@/components/servises/servises';
import Pagination from '@mui/material/Pagination';
import useCurrentStore from '@/components/store/store';

export default function Page () {

	const { currentPage, setCurrentPage } = useCurrentStore(); 
	const [pages, setPages] = useState<number | undefined>(undefined);

	const { data, isLoading, isError } = useQuery<{ info: Info, results: Character[] }, Error>(
		['characters', currentPage],
		() => new Service().fetchCharactersData(currentPage),
		{
		keepPreviousData: true,
		}
	);
	useEffect(()=>{
		setPages(data?.info.pages)
	},[{data}]);

  if (isLoading) {
    return <div>Завантаження...</div>;
  }
  if (isError) {
    return <div>Помилка при завантаженні даних</div>;
  }
  return (
    <>
      	<h1 className='text-5xl text-center text-greenad'>Characters</h1>
      	<div className='flex justify-end'>
			<Pagination
				className='bg-white flex rounded' 
				shape="rounded"
				count={pages} 
				page={currentPage} 
				onChange={(_, num) => setCurrentPage(num)}
				size="small" 
			/>
      	</div>
      	<div className="grid grid-cols-5 m-auto my-4 gap-8">
			{data.results.map((char) => {
				return(
					<CharacterCard 
						key={char.id}
						id={char.id}
						name={char.name}
						image={char.image}
						status={char.status} 
						favorite={false}/>
				)
			})}
		</div>
	</>
  );
};

