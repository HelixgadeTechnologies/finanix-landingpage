import FormDatas from "../components/FormData"
import Footer from "../components/Footer"
import dashboardfinanixicon from "../public/images/dashboardfinanixicon.png"
import Image from "next/image"
import personalaccounticon from '../public/images/personalaccounticon.png'
import receiptitem from '../public/images/receiptitem.png'
import statusup from '../public/images/statusup.png'
import chart from '../public/images/chart.png'
import Link from "next/link"
import setting from '../public/images/setting.png'
import Avatar from '../public/images/Avatar.png'
import logout from '../public/images/logout.png'
import Sidenav from "../components/Sidenav"
import home from '../public/images/home.png'

const settings = () => {

return (
    <div>

    <div className="w-full flex flex-col xl:flex-row">
        <div className="md:w-96 pt-8 px-3 border-r border-r-solid border-r-slate-300 hidden xl:flex xl:flex-col md:gap-4">
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

            <Link href="/">
                <div className="flex flex-row gap-3 mt-3 font-semibold hover:bg-lightishblue hover:border-l-4 hover:border-l-solid hover:border-l-primaryPurple hover:rounded-md p-2">
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
                    <Image src={setting} alt="settings" className="w-6 h-6" />
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
                <h2 className="text-black text-3xl py-8 font-roboto font-semibold">Settings</h2>
                
                <div>
                  <FormDatas />      
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



export default settings