import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import cookie from 'react-cookies';

import dashboardfinanixicon from '../public/images/dashboardfinanixicon.png';
import personalaccounticon from '../public/images/personalaccounticon.png';
import receiptitem from '../public/images/receiptitem.png';
import statusup from '../public/images/statusup.png';
import chart from '../public/images/chart.png';
import settings from '../public/images/setting.png';
import logout from '../public/images/logout.png';
import home from '../public/images/home.png';

const SideBar = () => {
  const [user, setUser] = useState(null);

  const checkAuth = async () => {
    const user = cookie.load('user');

    console.log('sidebar user', user);

    setUser(user);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="md:w-96 pt-8 px-3 border-r border-r-solid border-r-slate-300 hidden xl:flex xl:flex-col md:gap-4">
      <Image
        src={dashboardfinanixicon}
        width={150}
        height={75}
        alt="website logo"
      />

      <Link href="/">
        <div className="flex flex-row items-center gap-3 mt-8 font-semibold hover:bg-lightishblue hover:border-l-4 hover:border-l-solid hover:border-l-primaryPurple hover:rounded-md p-2">
          <div className="">
            <Image
              src={home}
              alt="my profile"
              className="rounded-full w-6 h-6"
            />
          </div>
          <li className="list-none text-darkishgray text-lg">Home</li>
        </div>
      </Link>

      <Link href="/profile">
        <div className="flex flex-row gap-3 mt-3 font-semibold hover:bg-lightishblue hover:border-l-4 hover:border-l-solid hover:border-l-primaryPurple hover:rounded-md p-2">
          <div className="shadow-lg rounded-full">
            <Image
              src={personalaccounticon}
              alt="my profile"
              className="rounded-full w-6 h-6"
            />
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

      <Link href="/subscriptions">
        <div className="flex flex-row justify-between items-center flex-wrap mt-2 font-semibold hover:bg-lightishblue hover:border-l-4 hover:border-l-solid hover:border-l-primaryPurple hover:rounded-md p-2">
          <div className="flex flex-row gap-3 flex-wrap">
            <Image src={receiptitem} alt="receipt item" className="w-6 h-6" />
            <li className="list-none text-darkishgray text-lg md:text-md">
              My Subscriptions
            </li>
          </div>
          <span className="bg-green-400 px-2 py-1 text-xs text-white">
            weekly
          </span>
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
          <Image
            src={user?.user_metadata?.avatar}
            alt="avatar"
            className="w-10 h-10"
            height={100}
            width={100}
          />
          <div>
            <h2 className="text-lg text-primaryPurple font-semibold">
              {user?.user_metadata?.firstName} {user?.user_metadata?.lastName}
            </h2>
            <h2 className="text-lg">{user?.email}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
