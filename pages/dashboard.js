import Footer from "../components/Footer"
import dashboardfinanixicon from "../public/images/dashboardfinanixicon.png"
import Image from "next/image"
import profileimage from '../public/images/profile.png'
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
import home from '../public/images/home.png'



const dashboard = () => {


    return (
        <div>
           
            <div className="w-full flex flex-col md:flex-row">
                <div className="md:w-96 pt-8 px-3 border-r border-r-solid border-r-slate-400 hidden md:flex md:flex-col md:gap-4">
                    <Image src={dashboardfinanixicon} width={150} height={75} alt="website logo" />

                    <Link href="/">
                        <div className="flex flex-row items-center gap-3 mt-8 font-semibold hover:bg-lightishblue hover:border-l-4 hover:border-l-solid hover:border-l-primaryPurple hover:rounded-md p-2">
                            <div className="">
                            <Image src={home} alt="my profile" className="rounded-full w-6 h-6" />
                           </div>
                            <li className="list-none text-darkishgray text-lg">
                           Home
                            </li>
                        </div>
                    </Link> 
                    
                    <Link href="/profile">
                        <div className="flex flex-row gap-3 mt-3 font-semibold hover:bg-lightishblue hover:border-l-4 hover:border-l-solid hover:border-l-primaryPurple hover:rounded-md p-2">
                            <div className="shadow-lg rounded-full">
                            <Image src={profileimage} alt="my profile" className="rounded-full w-6 h-6" />
                           </div>
                            <li className="list-none text-darkishgray text-lg md:text-md">
                            My Profile
                            </li>
                        </div>
                    </Link>
                    
                    <Link href="/dashboard">
                        <div className="flex flex-row gap-3 mt-3 font-semibold hover:bg-lightishblue hover:border-l-4 hover:border-l-solid hover:border-l-primaryPurple hover:rounded-md p-2">
                            <Image src={chart} alt="chart" className="w-6 h-6" />
                            <li className="list-none text-darkishgray text-lg md:text-md">
                            Dashboard
                            </li>
                        </div>
                    </Link>
                    
                    <Link href="/trades">
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
                        <Link href="/settings">
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
                    <div className="p-2 flex flex-row w-full justify-between items-center md:hidden">
                   
                        <Image src={dashboardfinanixicon} alt="finanix icon" className="w-30 h-8"/>
                        <div>
                        <Sidenav />
                        </div>
                        
                    </div>
                    <div className="w-full md:min-h-screen">
                        <h2 className="bg-white text-black text-3xl p-8 font-roboto font-semibold">Welcome Tony Stark!</h2>
                        <div className="bg-primaryOrange w-full p-3 flex flex-row justify-center items-center gap-6 text-white">
                            <span>
                            To proceed, please complete your verification process
                            </span>
                            <Image src={forbidden} alt="forbidden" className="w-6 h-6"/>     
                        </div>
                        
                        <div className="w-full p-6 flex flex-col gap-3 sm:flex-row sm:justify-around sm:gap-1 sm:flex-wrap">
                            <div className="w-full md:w-60 p-3 shadow-2xl rounded-lg">
                            <div className="flex flex-row justify-between">
                                <div className="space-y-1">
                                <h2 className="text-textGray text-lg">WALLET</h2>  
                                <h2 className="text-lg text-primaryPurple font-semibold">$2500</h2>  
                                </div>  
                                <div className="border border-solid border-slate-500 bg-primaryPurple w-fit h-fit p-2 rounded-full">
                                <Image src={Walletfill} alt="wallet icon" className="w-4 h-4"/>      
                                </div>
                            

                            </div>
                            <button className="w-full bg-primaryPurple text-white py-3 rounded-lg mt-6">
                            Deposit Funds
                            </button> 
                            </div>


                            <div className="w-full md:w-60 p-3 border border-solid border-slate-300 rounded-lg">
                            <div className="flex flex-row justify-between">
                                <div className="space-y-1">
                                <h2 className="text-textGray text-lg">WALLET</h2>  
                                <h2 className="text-lg text-primaryPurple font-semibold">$2500</h2>  
                                </div>  
                                <div className="border border-solid border-slate-500 bg-primaryPurple w-fit h-fit p-2 rounded-full">
                                <Image src={trendup} alt="trendup" className="w-4 h-4"/>      
                                </div>
                            

                            </div>
                                <div className="w-full mt-6">
                                    <h2 className="text-lg text-black font-semibold">20.49</h2>        
                                    <div className="flex flex-row gap-2 items-center">
                                    <p className="text-textishred text-sm font-semibold">$0.99</p>
                                    <span className="text-textGray">AVAILABLE</span> 
                                </div>       
                            </div>
                            </div>


                            <div className="w-full md:w-60 p-3 border border-solid border-slate-300 rounded-lg">
                            <div className="flex flex-row justify-between">
                                <div className="space-y-1">
                                <h2 className="text-textGray text-lg font-semibold">ACTIVE</h2>  
                                <h2 className="text-lg text-textGray font-semibold">PLAN</h2>  
                                </div>  
                                <div className="border border-solid border-slate-500 bg-primaryPurple w-fit h-fit p-2 rounded-full">
                                <Image src={timer} alt="wallet icon" className="w-4 h-4"/>      
                                </div>
                            

                            </div>
                            <button className="w-full bg-primaryPurple text-white py-3 rounded-lg mt-6">
                           WEEKLY
                            </button> 
                            </div>

                            <div className="w-full md:w-60 p-3 border border-solid border-slate-300 rounded-lg">
                            <div className="flex flex-row justify-between">
                                <div className="space-y-1">
                                <h2 className="text-textGray text-lg font-semibold">RETURNS ON</h2>  
                                <h2 className="text-lg text-textGray font-semibold">INVESTMENT</h2>  
                                </div>  
                                <div className="border border-solid border-slate-500 bg-primaryPurple w-fit h-fit p-2 rounded-full">
                                <Image src={percentagecircle} alt="wallet icon" className="w-4 h-4"/>      
                                </div>
                            

                            </div>
                                <div className="w-full mt-6">
                                    <h2 className="text-lg text-black font-semibold">8%</h2>        
                                    <div className="flex flex-row gap-1 items-center">
                                    <Image src={Arrowup} alt="arrow up" className="w-3 h-3 mt-1" />
                                    <p className="text-textyellow text-sm">+12%</p>
                                    <p></p>
                                    </div> 
                                </div>    
                            </div>
                        </div>
                    </div>
                <div>
                <Footer />
                </div>
               </div>
            </div>
        </div>
    )
}

export default dashboard