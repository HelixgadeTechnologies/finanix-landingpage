import { useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/logo.png';
import HomeSidenav from './HomeSidenav';
import cookie from 'react-cookies';

import supabase from '../config/supabase.config';

export default function Nav() {
  const [user, setUser] = useState(null);

  const checkAuth = async () => {
    const user = cookie.load('user');
    setUser(user);
  };

  async function logout() {
    await supabase.auth.signOut();
    cookie.save('user', null);
    setUser(null);
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="w-full bg-primaryPurple text-white p-3 gap-3 text-lg  border-b border-b-slate-400 flex flex-row justify-between md:items-center md:justify-around md:flex md:flex-row">
      <Image src={logo} alt="finanicIcon" className="w-28 h-6" />

      {user !== 'null' ? (
        <div className="hidden gap-x-6 md:flex md:flex-row">
          <Link href="/profile">My Profile</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/trades">My Trades</Link>
          <Link href="/subscriptions">Subscriptions</Link>
        </div>
      ) : null}

      <div className="hidden items-center gap-x-6 md:flex md:flex-row">
        {user === 'null' ? (
          <div>
            <Link href="/login">Login</Link>
            <Link
              href="/signup"
              className="border border-solid border-slate-300 px-3 py-2 rounded-lg ml-4"
            >
              Get Started
            </Link>
          </div>
        ) : (
          <div className="flex space-between items-center">
            <span onClick={() => logout()} className="mr-4 cursor-pointer">
              Logout
            </span>
            <span>
              <Image
                src={user?.user_metadata?.avatar}
                alt="avatar"
                className="w-10 h-10"
                height={100}
                width={100}
              />
            </span>
          </div>
        )}
      </div>
      <div className="">
        <HomeSidenav />
      </div>
    </div>
  );
}
