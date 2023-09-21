import Link from "next/link"
import Image from "next/image"
import logo from "../public/images/logo.png"


export default function Nav () {

    return (
        <div className="w-full bg-primaryPurple text-white p-3 gap-3 text-lg justify-around border-b border-b-slate-400 md:items-center md:flex md:flex-row">
            <Image
                src={logo}
                alt="finanicIcon"
                className="w-28 h-6"

            />
            <div className="hidden gap-x-6 md:flex md:flex-row">
                <Link href='/'>Home</Link>
                <Link href='/About'>About</Link>
                <Link href='/About'>About</Link>
                <Link href='/About'>About</Link>
            </div>

            <div className="hidden items-center gap-x-6 md:flex md:flex-row">
                <Link href='/Login'>Login</Link>
                <Link href='/Getstarted' className="border border-solid border-slate-300 px-3 py-2 rounded-lg">Get Started</Link>
            </div>
        </div>
    )
}