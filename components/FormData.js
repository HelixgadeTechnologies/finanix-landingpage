// import logo from "./headless_hr_logo 1.png"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { useState } from 'react';
// import { DevTool } from "@hookform/devtools";
import Modalset from '../pages/modalset';

const FormData = () => {
    const [isModalShown, setIsModalShown] = useState(false)

    const handleToggleModal = () => {
        setIsModalShown(!isModalShown)
    }

    const form = useForm({
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirm_password: "",
        }
       
    })
    // const [userInput, setUserInput] = useState()
    const { register, control, handleSubmit, watch, reset, formState } = form
    const { errors } = formState

    const onSubmit = (data) => {
        console.log("form submitted", data)
        reset() 
        setIsModalShown(true)
    }
   

    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full h-auto border-t border-solid border-slate-300 flex flex-col ">


            <div className='w-full md:w-3/4  flex flex-col gap-2'>


                <div className="w-full flex flex-col md:flex-row mt-6">
                    <label className="w-full md:w-1/3 text-textdarkgray">
                                Create New Password
                    </label>

                    <div className='flex flex-col gap-2 w-full'>
                    <input className="border border-solid border-slate-300 w-full p-3 outline-none rounded-lg shadow-sm peer ..."
                
                    type="password" id="password"  placeholder="Enter Your New Password" {...register(
                        "password", {
                            pattern: {
                                value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
                                message: "8-16 characters long, at least one capital/small letter, at least one symbol, at least one number",
                            }
                        }
                    )} />
                        {/* <p className='color-red text-sm md:text-md'>{errors.password?.message}</p> */}
                        {errors.password?.message && 
                    <p className='text-red-500 flex 
                    flex-row gap-1 text-xs md:text-md'>
                    {/* <FaExclamationCircle className="text-red-500 mt-1" /> */}
                            {errors.password?.message}</p>}
                    </div>
                </div>

                <div className="w-full flex flex-col md:flex-row mt-6">
                <label className="w-full md:w-1/3 text-textdarkgray">
                    Confirm Password
                </label>

                <div className='flex flex-col gap-2 w-full'>
                    <input className="border border-solid border-slate-300 w-full p-3 outline-none rounded-lg shadow-sm peer ..."
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Your New Password"
                    {...register("confirm_password", {

                        required: true,

                        pattern: {   
                            message: "Your passwords do not match",
                        },
                        validate: (val) => {
                            if (watch('password') !== val) {
                            return "Your passwords do no match"
                            }
                        },
                        })}/>
                        {/* <p className='color-red text-sm md:text-md'>{errors.confirm_password?.message}</p> */}

                        {errors.confirm_password?.message && 
                        <p className='text-red-500 flex 
                        flex-row gap-1 text-sm md:text-md'>
                        {/* <FaExclamationCircle className="text-red-500 mt-1" /> */}
                            {errors.confirm_password?.message}</p>}            
                </div>
                
                </div>

                
            </div>

                    <div className='flex flex-row justify-end mt-6'>
                    <button type="submit"
                    className="w-full px-3 py-2 bg-primaryPurple  text-white rounded-lg md:w-fit">
                    Save Changes
                    </button>    
                    </div>
                    

                    
                   
        </form> 
            {/* <DevTool control={control}/>    */}
            {isModalShown && (
               
               <Modalset onHandModal={handleToggleModal} />
               )}
        </div>
    )
}

export default FormData