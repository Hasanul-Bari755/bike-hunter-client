import React, { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../../contexts/AuthProvider';
import {  useQuery } from '@tanstack/react-query'
import Loading from '../../../Shared/Loading/Loading';

const AddProduct = () => {
    const conditions = [
        {
            conditionType: 'Excellect',
            id:'1'
        },
        {
            conditionType: 'Good',
            id:'2'
        },
        {
            conditionType: 'Fair',
            id:'3'
        }
    ]
    const { register, handleSubmit, formState: { errors } } = useForm()

    const { user } = useContext(AuthContext)

    const { data: categories = [] ,isLoading} = useQuery({
        queryKey: ['categoriestype'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categoriestype');
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = (data) => {
        
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-4xl'>Add Product</h2>
            <form className='my-6'  onSubmit={handleSubmit(handleAddProduct)}>
                <div className='grid grid-cols-2'>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Seller Name</span></label>
                    <input  defaultValue={user?.displayName} type="text" {...register("sellerName", {
                        required: "Seller Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.sellerName && <p className='text-red-500'>{errors.sellerName.message}</p>}
                </div>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Seller Phone Number</span></label>
                    <input type="text" {...register("phone", {
                        required: "Seller Phone Numner is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Name</span></label>
                    <input type="text" {...register("productName", {
                        required: "Product Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.productName && <p className='text-red-500'>{errors.productName.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Photo</span></label>
                    <input type="file" {...register("productPhoto", {
                        required: "Product Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.productPhoto && <p className='text-red-500'>{errors.productPhoto.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("Location", {
                        required: "Location is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.Location && <p className='text-red-500'>{errors.Location.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Resale Price</span></label>
                    <input type="text" {...register("resalePrice", {
                        required: "Resale price is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.resalePrice && <p className='text-red-500'>{errors.resalePrice.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Original Price</span></label>
                    <input type="text" {...register("originalPrice", {
                        required: "Original price is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Year of use</span></label>
                    <input type="text" {...register("yearOfUse", {
                        required: "Year of use is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.yearOfUse && <p className='text-red-500'>{errors.yearOfUse.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Parchase Year</span></label>
                    <input type="text" {...register("parchaseYear", {
                        required: "Parchase year is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.parchaseYear && <p className='text-red-500'>{errors.parchaseYear.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <textarea type="text" {...register("description", {
                        
                    })} className="input  w-full max-w-xs textarea textarea-bordered" />
                  
                </div>

                 <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Condition</span></label>
                    <select {...register('condition',{required: true})} className='select input-bordered w-full max-w-xs'>
                        {
                            conditions.map(condition => <option
                                key={condition.id}
                                value={condition?.conditionType}
                            >{condition?.conditionType}</option>)
                      }
                    </select>
                </div>

                 <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Choose Your Categories</span></label>
                    <select {...register('categories',{required: true})} className='select input-bordered w-full max-w-xs'>
                        {
                            categories.map(categorie => <option
                                key={categorie._id}
                                value={categorie?.name}
                            >{categorie?.name}</option>)
                      }
                    </select>
                </div>
                 </div>

               
                <br />
                  
                <div className='text-center'>
                     <input className='btn btn-accent w-2/4 mx-auto' value="Submit" type="submit" />
                </div>
                   
                </form>
        </div>
    );
};

export default AddProduct;