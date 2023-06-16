import React from 'react';
import './Shipment.css'
import { useForm } from 'react-hook-form';

const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
       
        
     
        <input  placeholder='your name' {...register("name", { required: true })} />
     
        {errors.name && <span className='error'>This name is required</span>}

        <input  placeholder='your email'{...register("email", { required: true })} />
     
     {errors.email && <span className='error'>This email is required</span>}

     <input  placeholder='your address' {...register("address", { required: true })} />
     
     {errors.address && <span className='error'>This address is required</span>}


     <input  placeholder='your zip code' {...register("number", { required: true })} />
     
     {errors.number && <span className='error'>This number is required</span>}
        
        <input  type="submit" />
      </form>
    );
};

export default Shipment;