import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import MaskedInput from 'react-text-mask';
import { Button } from "@/components/ui/button";
import { Close } from './icons';

interface FormData {
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
};

interface PropsForModal { 
    openForm: boolean, 
    handleOpenForm: () => void,
};


export default function ModalForm({ handleOpenForm }: PropsForModal){
  const { 
    register, 
    handleSubmit,  
    reset,
    formState: { errors } 
  } = useForm<FormData>({
    mode: 'onBlur'
    });

  const onSubmit: SubmitHandler<FormData> = data => {
    reset();
    handleOpenForm();
  };

  return (

    <div className=" z-20 fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
        <div className="bg-white w-96 text-black rounded-lg px-4 py-16 relative">     
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4 className='absolute top-4 left-8 text-2xl text-greenad font-bold'>Fill out the form</h4>
                    
                <div className='flex flex-col relative pb-4'>
                    <label>First Name<span className='text-red-500'>*</span>
                        <input className='outline-none bg-gray-50 border border-gray-300 text-gray-900 text-md rounded focus:ring-greenad focus:border-greenad block w-full p-2'
                            {...register('firstName',{
                                required: `This field is required`,
                                minLength: {
                                    value: 2,
                                    message: 'This field must have a minimum of 2 characters'
                                }
                           })} 
                        />
                        {errors.firstName && <p className='text-red-500 absolute'>{errors?.firstName.message}</p>}
                    </label>
                </div>

                <div className='flex flex-col relative pb-4'>
                    <label>Last Name<span className='text-red-500'>*</span>
                        <input className='outline-none bg-gray-50 border border-gray-300 text-gray-900 text-md rounded focus:ring-greenad focus:border-greenad block w-full p-2'
                                {...register('lastName',{
                                    required: `This field is required`,
                                    minLength: {
                                        value: 2,
                                        message: 'This field must have a minimum of 2 characters'
                                    }
                            })}                             
                        />
                        {errors.lastName && <p className='text-red-500 absolute'>{errors?.lastName.message}</p>}
                    </label>
                </div>

                <div className='flex flex-col relative pb-4'>
                    <label>Email<span className='text-red-500'>*</span>
                        <input className='outline-none bg-gray-50 border border-gray-300 text-gray-900 text-md rounded focus:ring-greenad focus:border-greenad block w-full p-2'
                            {...register('email',{
                                required: `This field is required`,
                                pattern: /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/gi,
                            })} 
                        />
                        {errors.email && <p className='text-red-500 absolute'>{errors?.email.message || 'Your email address is not valid'}</p>}
                    </label>
                </div>

                <div className='flex flex-col relative pb-4'>
                    <label>Phone
                        <MaskedInput className='outline-none bg-gray-50 border border-gray-300 text-gray-900 text-md rounded focus:ring-greenad focus:border-greenad block w-full p-2'
                            mask={['+', '3', '8', ' ','(', '0', /\d/, /\d/, ')', ' ',/\d/, /\d/, /\d/,' ', /\d/, /\d/, ' ',/\d/, /\d/]}
                            placeholder="+38 (0__) ___ __ __"
                        />
                        {errors.phone && <p className='text-red-500 absolute'>{errors?.phone.message || 'The field must be filled in completely'}</p>}
                    </label>
                </div>
        
                <button className='absolute top-4 right-4 rounded border-black hover:border' onClick={handleOpenForm}><Close className='w-8 h-8'/></button>
                <Button className='absolute bottom-4 right-4'>Send</Button>
            </form>
        </div>
    </div>
  )
}

