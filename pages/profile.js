'use client'
import Footer from "../components/Footer"
import dashboardfinanixicon from "../public/images/dashboardfinanixicon.png"
import Image from "next/image"
import personalaccounticon from '../public/images/personalaccounticon.png'
import receiptitem from '../public/images/receiptitem.png'
import statusup from '../public/images/statusup.png'
import chart from '../public/images/chart.png'
import Link from "next/link"
import settings from '../public/images/setting.png'
import Avatar from '../public/images/Avatar.png'
import logout from '../public/images/logout.png'
import forbidden from '../public/images/forbidden.png'
import timer from '../public/images/timer.png'
import trendup from '../public/images/trendup.png'
import Walletfill from '../public/images/Walletfill.png'
import percentagecircle from '../public/images/percentagecircle.png'
import Arrowup from '../public/images/Arrowup.png'
import menunavbar from '../public/images/menunavbar.png'
import Sidenav from "../components/Sidenav"
import cloudicon from '../public/icons/cloudicon.png'
import US from '../public/images/US.png'
import { useEffect, useMemo, useState } from "react"
import dynamic from 'next/dynamic'

const { CountryList } = dynamic(() => import('country-list-with-dial-code-and-flag'), { ssr: false })






const profile = () => {

    const [countries, setCountries] = useState([])



    // // const [value, setValue] = useState('')
    // // const options = useMemo(() => countryList().getData(), [])
  
    // // const changeHandler = (e) => {
    // //   setValue(e.target.value)
    // // }
  
    
    function changeHandler(event) {
        event.preventDefault()
        CountryList.getAll()
        setCountries(CountryList)
    console.log(countries, "<<< COUNTRIES")
    }
    



    return (
        <div>

            <div className="w-full flex flex-col xl:flex-row">
                <div className="md:w-96 pt-8 px-3 border-r border-r-solid border-r-slate-300 hidden xl:flex xl:flex-col md:gap-4">
                    <Image src={dashboardfinanixicon} width={150} height={75} alt="website logo" />
                  

                    <Link href="/">
                        <div className="flex flex-row gap-3 mt-8 font-semibold hover:bg-lightishblue hover:border-l-4 hover:border-l-solid hover:border-l-primaryPurple hover:rounded-md p-2">
                            <div className="shadow-lg rounded-full">
                            <Image src={personalaccounticon} alt="my profile" className="rounded-full w-6 h-6" />
                           </div>
                            <li className="list-none text-darkishgray text-lg md:text-md">
                            My Profile
                            </li>
                        </div>
                    </Link>
                    
                    <Link href="/">
                        <div className="flex flex-row gap-3 mt-3 font-semibold hover:bg-lightishblue hover:border-l-4 hover:border-l-solid hover:border-l-primaryPurple hover:rounded-md p-2">
                            <Image src={chart} alt="chart" className="w-6 h-6" />
                            <li className="list-none text-darkishgray text-lg md:text-md">
                            Dashboard
                            </li>
                        </div>
                    </Link>
                    
                    <Link href="/">
                        <div className="flex flex-row gap-3 mt-3 font-semibold hover:bg-lightishblue hover:border-l-4 hover:border-l-solid hover:border-l-primaryPurple hover:rounded-md p-2">
                            <Image src={statusup} alt="status up" className="w-6 h-6" />
                            <li className="list-none text-darkishgray text-lg md:text-md">
                            My Trades
                            </li>
                        </div>
                    </Link>
                    
                    <Link href="/">
                        <div className="flex flex-row justify-between items-center flex-wrap mt-2 font-semibold hover:bg-lightishblue hover:border-l-4 hover:border-l-solid hover:border-l-primaryPurple hover:rounded-md p-2">
                        <div className="flex flex-row gap-3 flex-wrap">
                            <Image src={receiptitem} alt="receipt item" className="w-6 h-6" />
                            <li className="list-none text-darkishgray text-lg md:text-md">
                            My Subscriptions
                            </li>
                        </div>
                        <span className="bg-green-400 px-2 py-1 text-xs text-white">weekly</span>
                        </div>
                    </Link>
                    
                    <div className="mt-56 flex-col gap-12">
                        <Link href="/">
                        <div className="flex flex-row items-center gap-3 hover:bg-lightishblue hover:border-l-4 hover:border-l-solid hover:border-l-primaryPurple hover:rounded-md p-2">
                            <Image src={settings} alt="settings" className="w-6 h-6" />
                            <h2 className="text-lg text-darkishgray font-semibold">Settings</h2>
                        </div>
                        </Link>

                        <Link href="/">
                        <div className="flex flex-row items-center gap-3 hover:bg-lightishblue hover:border-l-4 hover:border-l-solid hover:border-l-primaryPurple hover:rounded-md p-2">
                            <Image src={logout} alt="settings" className="w-6 h-6" />
                            <h2 className="text-lg text-darkishgray font-semibold">Log Out</h2>
                        </div>
                        </Link>

                        <div className="flex flex-row items-center gap-4 mt-8 border-t border-slate-300 pt-6">
                            <Image src={Avatar} alt="avatar" className="w-10 h-10" />
                            <div>
                            <h2 className="text-lg text-primaryPurple font-semibold">Tony Stark</h2>
                            <h2 className="text-lg">tonystark@gmail4u.com</h2>
                            </div>
                        </div>

                    </div>
                    
                </div>
            
                <div className="w-full">
                    <div className="p-2 flex flex-row w-full justify-between items-center xl:hidden">
                   
                        <Image src={dashboardfinanixicon} alt="finanix icon" className="w-30 h-8"/>
                        <div>
                        <Sidenav />
                        </div>
                        
                    </div>
                    <div className="w-full bg-backgroundgray p-6 md:min-h-screen">
                        <h2 className="text-black text-3xl py-8 font-roboto font-semibold">My Profile</h2>

                        <div className="space-y-2">
                            <p className="text-black font-semibold text-lg">
                            Personal info
                            </p>

                            <p className="text-textGray text-sm">
                            Update your photo and personal details here.
                            </p>
                        </div>

                    
                            
                <form>
                        
                    <div className="flex-col py-6 border-t border-solid border-slate-300 mt-12 w-full">
                    <div className="w-full space-y-6 md:w-3/4">


                    <div className="flex flex-col items-start gap-4 w-full md:flex-row justify-between ">
                    <label className="w-full md:w-1/3 text-textdarkgray">
                    First Name     
                    </label>
                    <input type="text" className="border border-solid border-slate-300 w-full p-3 outline-none rounded-lg shadow-sm" />
                    </div>

                    <div className="flex flex-col gap-4 w-full md:flex-row justify-between">
                    <label className="w-full text-textdarkgray md:w-1/3">
                    Last Name  
                    </label>
                    <input type="text" className="border border-solid border-slate-300 w-full p-3 outline-none rounded-lg shadow-sm" />
                    </div>



                    </div>
                    </div>
                            
                    <div className="flex-col py-6 border-t border-solid border-slate-300 w-full">
                        <div className="w-full space-y-6 md:w-3/4">
                            <div className="flex flex-col gap-4 w-full md:flex-row justify-between">
                                <label className="w-full md:w-1/3 text-textdarkgray">
                                Email Address     
                                </label>
                                <input type="email" name="email" id="email" className="border border-solid border-slate-300 w-full p-3
                                 outline-none rounded-lg shadow-sm" />
                            </div>
                        </div>
                    </div>  

                    <div className="py-6 border-t border-solid border-slate-300 w-full" >

                        <div className="w-full md:w-3/4">
                                    

                            <div className="flex flex-col gap-4 lg:flex-row md:justify-start">
                                <div className="space-y-2 w-full md:w-1/3">
                                    <p className="text-textdarkgray font-semibold text-md">
                                    Your photo
                                    </p>

                                    <p className="text-textdarkgray text-sm">
                                    This will be displayed on your profile.
                                    </p>
                                </div>   

                                <div className="flex flex-col gap-6 md:flex-row">
                                
                                    <Image src={Avatar} alt="avatar" className="w-12 h-12" />  
                                                
                                    <div className="border border-solid border-slate-300 w-full mx-auto flex flex-col items-center py-6 md:w-[500px]">
                                
                                            <button className="w-fit p-1 rounded-full mb-6">
                                            <Image src={cloudicon} alt="cloud icon" className="w-6 h-5" />                  
                                            </button>                 
                                            <p className="text-profiletextgray text-sm"><span><button className="text-primaryPurple text-md font-semibold">Click To Upload </button></span> or drag and drop</p>                 
                                            <p className="text-profiletextgray text-sm">SVG, PNG, JPG or GIF (max. 800x400px)</p>                 
                                    
                                    </div>               
                                
                                </div>        
                            </div>                
                        </div>
                                
                    </div>
                            
                    <div className="flex-col py-6 border-t border-solid border-slate-300 w-full">
                        <div className="w-full space-y-6 md:w-3/4">
                            <div className="flex flex-col gap-4 w-full md:flex-row justify-between">
                                <label className="w-full md:w-1/3 text-textdarkgray">
                                Role    
                                </label>
                                <input type="email" name="email" id="email" placeholder="Tech Enthusiast" className="border border-solid border-slate-300 w-full p-3
                                 outline-none rounded-lg shadow-sm" />
                            </div>
                        </div>
                    </div>  
                       
                                
                    <div className="flex-col py-6 border-y border-solid border-slate-300 w-full">
                        <div className="w-full space-y-6 md:w-3/4">
                            <div className="flex flex-col gap-4 w-full md:flex-row justify-between">
                                <label className="w-full md:w-1/3 text-textdarkgray">
                               Country  
                                </label>
                                        
                               
                                {/* <select className="border border-solid border-slate-300 w-full p-3
                                 outline-none rounded-lg shadow-sm">
                                        {countries.map((countryData) => (
                                            <option key={countryData.iso} value={countryData.iso}>
                                            {countryData.name}
                                            </option>
                                        ))}       
                                </select> */}
                                {/* <button onClick={changeHandler}>click me</button> */}
                                        
                                <select  className="border border-solid border-slate-300 w-full p-3
                                 outline-none rounded-lg shadow-sm">
                                            
                                <option>United States</option>
                                </select>
                    
                            </div>



                            <div className="flex flex-col gap-4 w-full md:flex-row justify-between">
                                <label className="w-full md:w-1/3 text-textdarkgray">
                              Phone   
                                </label>
                                <div className="w-full flex flex-row gap-3">
                                  <div className="flex flex-row items-center border border-solid border-slate-300 gap-2 px-4 py-3 rounded-lg shadow-sm">
                                            <Image src={US} alt="united states" className="w-4 h-4" />   
                                     <p>+1</p>       
                                </div>        
                                <input type="number" className="border border-solid border-slate-300 p-3
                                 outline-none rounded-lg shadow-sm flex-1" />           
                               </div>
                            </div>
                        </div>
                          
                    </div> 
                    <div className="py-6 flex flex-row gap-2 justify-end">
                    <button className="border border-solid border-slate-300 px-3 py-2 rounded-lg">Cancel</button>                
                    <button className="px-4 py-2 bg-primaryPurple text-white rounded-lg">Save</button>                
                    </div>          
                </form>
                            
                            
                    
                        
                    </div>
                    <div>
                    <Footer />
                    </div>
               </div>
            </div>
        </div>
    )
}

export default profile