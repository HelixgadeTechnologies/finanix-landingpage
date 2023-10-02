import menu from '../public/icons/menu.png'
import closeIcon from '../public/icons/closeIcon.svg'
import { useState } from 'react'
import personalaccounticon from '../public/images/personalaccounticon.png'
import Footer from "../components/Footer"
import dashboardfinanixicon from "../public/images/dashboardfinanixicon.png"
import Image from "next/image"
import receiptitem from '../public/images/receiptitem.png'
import statusup from '../public/images/statusup.png'
import chart from '../public/images/chart.png'
import Link from "next/link"
import settings from '../public/images/setting.png'
import Avatar from '../public/images/Avatar.png'
import logout from '../public/images/logout.png'
import home from '../public/images/home.png'
import logo from '../public/images/logo.png';
import homeprofile from '../public/icon home/homeprofile.png'
import homelinear from '../public/icon home/homelinear.png'
import homestatusbar from '../public/icon home/homestatusbar.png'
import homereceiptitem from '../public/icon home/homereceiptitem.png'
import homesettings from '../public/icon home/homesettings.png'
import homelogout from '../public/icon home/homelogout.png'
import homecloseicon from '../public/icon home/homecloseicon.png'

const HomeSidenav = () => {

    const [isOpen, setIsOpen] = useState(false)
      
        
  
      return(
         
          <>
            {!isOpen ?
            (<button><Image src={menu} alt="menu icon" onClick={()=> setIsOpen(!isOpen)} /></button>):
            (
             <div className='fixed'></div>
            )
          } 
  
           <div className='bg-primaryPurple'>
              <div className={`w-full min-h-screen  fixed top-0 right-0 bg-slate-400 z-[600] opacity-30 ... 
              ${isOpen? 'translate-x-0': 'translate-x-full'}`} onClick={()=> setIsOpen(!isOpen)}>
              </div>
              
              <div className={`w-2/3 fixed top-0 right-0 bottom-0  min-h-screen z-[1000] flex flex-col
              ${isOpen? 'translate-x-0': 'translate-x-full'} ease-in-out duration-300`}>
              <button className='bg-primaryPurple text-black absolute top-6 right-0' onClick={()=> setIsOpen(!isOpen)}>
              <Image className='w-12 bg-transparent' src={homecloseicon} alt="close icon" />
              
              </button>
  
              <div>
               
                          
              <div className="md:w-full h-screen bg-primaryPurple text-white pt-8 px-3 border-r border-r-solid border-r-slate-400 flex flex-col gap-4">
                
                    <Image src={logo} alt="website logo"  className='w-20 h-5'/>

                    <div className="flex flex-row justify-around border-b border-slate-300 pt-6">
                        <Image src={Avatar} alt="avatar" className="w-8 h-8" />
                        <div>
                        <h2 className="text-md font-semibold">Tony Stark</h2>
                        <h2 className="text-md">tonystark@gmail4u.com</h2>
                        </div>
                    </div>
                              
                    <Link href="/">
                        <div className="flex flex-row items-center gap-3 mt-8 font-semibold text-primaryPurple rounded-md p-2 bg-white">
                            <div className="">
                            <Image src={home} alt="my profile" className="rounded-full w-6 h-6" />
                           </div>
                            <li className="list-none text-md">
                           Home
                            </li>
                        </div>
                    </Link> 
                              
                    <Link href="/profile">
                        <div className="flex flex-row gap-3 mt-3 font-semibold hover:bg-white hover:text-primaryPurple hover:rounded-md p-2">
                            <div className="shadow-lg rounded-full">
                            <Image src={homeprofile} alt="my profile" className="rounded-full w-6 h-6" />
                           </div>
                            <li className="list-none text-md">
                            My Profile
                            </li>
                        </div>
                    </Link>
                    
                    <Link href="/dashboard">
                        <div className="flex flex-row gap-3 mt-3 font-semibold hover:bg-white hover:text-primaryPurple hover:rounded-md p-2">
                            <Image src={homelinear} alt="chart" className="w-6 h-6" />
                            <li className="list-none text-md">
                            Dashboard
                            </li>
                        </div>
                    </Link>
                    
                    <Link href="/trades">
                        <div className="flex flex-row gap-3 mt-3 font-semibold hover:bg-white hover:text-primaryPurple hover:rounded-md p-2">
                            <Image src={homestatusbar} alt="status up" className="w-6 h-6" />
                            <li className="list-none text-md">
                            My Trades
                            </li>
                        </div>
                    </Link>
                    
                    <Link href="/subscription">
                        <div className="flex flex-row justify-between items-center flex-wrap mt-2 font-semibold hover:bg-white hover:text-primaryPurple hover:rounded-md p-2">
                        <div className="flex flex-row gap-3 flex-wrap">
                            <Image src={homereceiptitem} alt="receipt item" className="w-6 h-6" />
                            <li className="list-none text-md">
                            My Subscriptions
                            </li>
                        </div>
                        <span className="bg-green-400 px-1 text-[10px] text-white">weekly</span>
                        </div>
                    </Link>
                    
                   
                    <Link href="/settings">
                    <div className="flex flex-row items-center gap-3 hover:bg-white hover:text-primaryPurple hover:rounded-md p-2">
                        <Image src={homesettings} alt="settings" className="w-6 h-6" />
                        <h2 className="text-md font-semibold">Settings</h2>
                    </div>
                    </Link>

                    <Link href="/">
                    <div className="flex flex-row items-center gap-3 hover:bg-white hover:text-primaryPurple hover:rounded-md p-2">
                        <Image src={homelogout} alt="settings" className="w-6 h-6" />
                        <h2 className="text-md font-semibold">Log Out</h2>
                    </div>
                    </Link>

            
                    
                </div>                
                
               
              </div>
              </div>
             
                  





            </div>    
          </>
      )
  }
  
  export default HomeSidenav