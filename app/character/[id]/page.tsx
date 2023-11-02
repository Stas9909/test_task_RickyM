'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import Service from '@/components/servises/servises'

export default function Page({ params }: { params: { id: number } }) {
	const {
		data: character,
		isError,
		isLoading
	} = useQuery({
		queryKey: ['character', params.id],
		queryFn: () => new Service().getCharacterById(params.id)
	})

	if (isLoading) {
		return <div>Завантаження...</div>
	}

	if (isError) {
		return <div>Помилка при завантаженні даних</div>
	}

	return (
		<div className="flex justify-between m-auto">
			<div className="rounded p-8 bg-white">
				<Image
					className="rounded border-2 border-black"
					src={character.image}
					alt={character.name}
					width={400}
					height={400}
				/>
			</div>
			<ul className="w-1/2 font-bold">
				<li className="text-green-500">Name</li>
				<li className="text-xl">{character?.name}</li>
				<li className="text-green-500">Species:</li>
				<li className="text-xl">{character?.species}</li>
				<li className="text-green-500">Gender:</li>
				<li className="text-xl">{character?.gender}</li>
				<li className="text-green-500">Status:</li>
				<li className="text-xl">{character?.status}</li>
				<li className="text-green-500">Location:</li>
				<li className="text-xl">{character?.location.name}</li>
			</ul>
		</div>
	)
}
