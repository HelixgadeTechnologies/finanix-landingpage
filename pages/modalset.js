import { useState } from "react"
import modalicon from '../public/icons/modalicon.png'
import Image from "next/image"


const Modalset = (props) => {

    const handleModalSubmit = (e) => {
        e.preventDefault()
       props.onHandModal()
    }

    console.log('set')


    return (

        <div>
           <div className="w-full h-screen fixed top-0 left-0 bg-slate-400 bg-opacity-70 z-[1000] pointer-events-none overflow-hidden"> 
                
            </div>
    

            <div className="absolute top-44 inset-x-0 mx-auto w-72 bg-white text-black z-[2000] p-6 md:w-96">
                <div className="flex flex-row gap-3 my-6">
                    <div className="p-3 rounded-full bg-green-300">
                    <Image src={modalicon}/>
                    </div>
                    <div>
                        <p>Saved changes</p>
                        <p className="text-xs text-modaltextgray">Your details have been successfully updated.</p>
                    </div>

                </div>
                <div className="flex flex-col items-end">
                <button onClick={handleModalSubmit} className="bg-modalGreen text-white px-3 py-1 rounded-md">okay</button>
                </div>
        </div>
        </div>
    )
}

export default Modalset