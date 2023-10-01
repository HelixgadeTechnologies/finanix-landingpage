import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/logo.png';
import HomeSidenav from './HomeSidenav';

export default function Nav() {
  return (

    <div className="w-full bg-primaryPurple text-white p-3 gap-3 text-lg  border-b border-b-slate-400 flex flex-row justify-between md:items-center md:justify-around md:flex md:flex-row">
      <Image src={logo} alt="finanicIcon" className="w-28 h-6 flex self-center" />
      <div className="hidden gap-x-6 md:flex md:flex-row">
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/About">About</Link>
        <Link href="/About">About</Link>
      </div>

      <div className="hidden items-center gap-x-6 md:flex md:flex-row">
        <Link href="/login">Login</Link>
        <Link
          href="/signup"
          className="border border-solid border-slate-300 px-3 py-2 rounded-lg"
        >
          Get Started
        </Link>
      </div>
      <div className=''>
        <HomeSidenav />
      </div>
    </div>
  );
}
