'use client'

import Image from 'next/image'
import Link from 'next/link'
import Tooltip from '@mui/material/Tooltip';
import { Star} from '@/components/icons';
import useCurrentStore from '@/components/store/store';

export default function CharacterCard ({id, name, status, image, favorite}: CharacterCard) {
	
	const { favorites, addToFavorites, removeFromFavorites } = useCurrentStore(); 

	const handleAddToFavorites = () => {
		addToFavorites({id, name, status, image, favorite}); // Додавання об'єкта до списку обраних
	  };
	
	  const handleRemoveFromFavorites = () => {
		removeFromFavorites({id, name, status, image, favorite}); // Видалення об'єкта зі списку обраних
	  };
	
	  const isFavorite = favorites.some((fav) => fav.id === id);

  return (
    <div className="rounded-t-lx rounded-b-lg bg-greenad text-black overflow-hidden hover:scale-105 transition relative" key={id}> 
	  	<Image src={`${image}`} alt={name} width={300} height={300} />
		<div className="p-4 relative">
			<span className="block font-bold">Name:</span>
			<span>{name}</span>
			<span className="block font-bold">Status:</span>
			<span>{status}</span>
			<Tooltip title="Go to Character" placement="top">
				<Link className='shadow-lg w-14 h-14 absolute -top-8 right-2 border border-greenad rounded-ll bg-black flex items-center justify-center hover:border-green-500' href={`/character/${id}`}>
					<span className='block text-greenad text-2xl font-bold hover:text-green-500' >Go</span>
				</Link>
			</Tooltip>
		</div>
		{isFavorite ? (
			<Tooltip title="Remove from Favorites" placement="top">
				<div className='absolute top-2 left-2 w-12 h-12 bg-black rounded-ll flex items-center justify-center cursor-pointer'>
					<Star className='w-10 h-10' fill='#87f54e' onClick={handleRemoveFromFavorites}/>
				</div>
			</Tooltip>
      	) 
		: 
		(
			<Tooltip title="Add to Favorites" placement="top">
				<div className='shadow-2xl absolute top-2 left-2 w-12 h-12 bg-black rounded-ll flex items-center justify-center cursor-pointer'>
					<Star className='shadow-2xl w-10 h-10' fill='white' onClick={handleAddToFavorites}/>
				</div>	
			</Tooltip>
      	)}								
	</div>
  )
}