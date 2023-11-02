'use client'
import React, { useState, useEffect} from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ModalForm from "@/components/modalForm";

export default function Page() {
	const[openForm, setOpenForm] = useState<boolean>(false);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	useEffect(() => {
	  setIsLoaded(true);
	}, []);
	function hadleOpenForm (){
		setOpenForm(!openForm);
	}
	return (
		<div className="bg-[url('../public/bghome.png')] bg-cover bg-no-repeat fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
			<div><Image className={`${isLoaded ? 'animate-scale-on' : '' } `} src='/nlo.png' alt='Rich and Morty' width={500} height={300} /></div>
			<Button onClick={hadleOpenForm} className="animate-spin absolute right-24 bottom-24">Open Form</Button>
			{openForm && <ModalForm openForm={openForm} handleOpenForm={hadleOpenForm}/>}	
		</div>
	)
}
