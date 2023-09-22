import Link from "next/link"
import Image from "next/image"
import footerlogo from "../public/images/footerlogo.png"
import location from '../public/icons/location.png'
import locationSmall from '../public/icons/locationSmall.png'
import call from '../public/icons/call.png'
import callSmall from '../public/icons/callSmall.png'
import facebookbutton from '../public/icons/facebookbutton.png'
import instagrambutton from '../public/icons/instagrambutton.png'
import twitterbutton from '../public/icons/twitterbutton.png'
import logoGrey from '../public/images/logoGrey.png'


export default function Footer () {


    return (
        <div>
            <section className="py-12 px-3 bg-white md:px-12 md:bg-primaryPurple">
                <div className="w-6/7">
                <div className="container flex flex-col mx-auto gap-y-6 border-b border-b-solid pb-12 border-b-slate-400 lg:flex-row lg:justify-between">
                    <div className="flex flex-col gap-3">
                        <Image src={footerlogo} alt="finanicIcon" className="w-32 h-6 hidden md:block" />
                        <Image src={logoGrey} alt="finanicIcon" className="w-96 h-8 md:hidden" />
                        <div className="flex flex-row gap-3">
                            <Image src={location} alt="location" className="w-6 h-6 hidden md:block" />
                            <Image src={locationSmall} alt="location" className="w-6 h-6 md:hidden" />
                        <p className="max-w-prose text-black md:text-white lg:max-w-[130px]">
                        6340 Stagecoach Dr, West Des Moines, IA 50266, USA
                        </p>
                        </div>
                        
                        <div className="flex flex-row gap-3">
                            <Image src={call} alt="calls" className="w-6 h-6 hidden md:block" />
                            <Image src={callSmall} alt="calls" className="w-6 h-6 md:hidden" />
                            <p className="text-black md:text-white">+1(515)996-5230</p>
                        </div>
                    </div>


                    <div className="flex flex-col gap-6">
                        <h2 className="font-bold text-gray-400 md:text-white">INFORMATION</h2>
                        <h3 className="text-black md:text-white">Compliance</h3>

                        <p className="text-black md:text-white">Privacy Policy</p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h2 className="font-bold text-gray-400 md:text-white">COMPANY</h2>
                        <h3 className="text-black md:text-white">About Us</h3>
                        <h3 className="text-black md:text-white">Get Started</h3>
                        <h3 className="text-black md:text-white">Plans</h3>
                    </div>


                    <div className="flex flex-col gap-6">
                        <h2 className="font-bold text-gray-400 md:text-white">SUPPORT</h2>
                        <h3 className="text-black md:text-white">Contact Us</h3>

                        <p className="text-black md:text-white">Privacy Policy</p>
                    </div>


                    <div className="flex flex-col gap-8">
                        <h2 className="text-black md:text-white">Subscribe to get the latest news from us</h2>
                        <form>

                            <div className="w-fit bg-white p-2 rounded-xl border border-solid border-slate-400 md:border-none">
                                <input type="email" placeholder="youremail123@gmail.com" className="placeholder:text-xs bg-white placeholder:text-slate-500" />
                                <button className="text-white bg-primaryPurple text-sm p-3 rounded-lg">SUBSCRIBE</button>
                            </div>
                        </form>
                    </div>

                    
                </div>

                <div className="flex flex-col-reverse gap-6 items-center text-black mt-12 md:text-slate-300 md:flex-row md:justify-between">
                        <h2 className="text-md">@ 2023 Finanix, Inc. All rights reserved.</h2>
                        <div className="flex flex-row gap-3">
                           <a href="https://www.facebook.com"><Image src={facebookbutton} alt="facebook"/></a>
                           <a href="https://www.instagram.com"><Image src={instagrambutton} alt="instagram"/></a>
                           <a href="https://www.twitter.com"><Image src={twitterbutton} alt="twitter"/></a>
                        </div>
                </div>
                </div>
            </section>
        </div>
    )
}