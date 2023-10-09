import menunavbar from '../public/images/menunavbar.png';
import closeIcon from '../public/icons/closeIcon.svg';
import { useState } from 'react';
import personalaccounticon from '../public/images/personalaccounticon.png';
import dashboardfinanixicon from '../public/images/dashboardfinanixicon.png';
import Image from 'next/image';
import receiptitem from '../public/images/receiptitem.png';
import statusup from '../public/images/statusup.png';
import chart from '../public/images/chart.png';
import Link from 'next/link';
import settings from '../public/images/setting.png';
import Avatar from '../public/images/Avatar.png';
import logout from '../public/images/logout.png';
import home from '../public/images/home.png';

//Context
import { useAuth } from '../context';

const Sidenav = () => {
  const { user, logout } = useAuth;
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    setIsOpen(false);
    logout();
  };

  return (
    <>
      {!isOpen ? (
        <button>
          <Image
            src={menunavbar}
            alt="menu icon"
            onClick={() => setIsOpen(!isOpen)}
          />
        </button>
      ) : (
        <div className="fixed"></div>
      )}

      <div>
        <div
          className={`w-full min-h-screen  fixed top-0 right-0 bg-slate-400 z-[600] opacity-30 ... 
              ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        ></div>

        <div
          className={`w-2/3 fixed top-0 right-0 bg-white h-screen z-[1000] flex flex-col
              ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
              } ease-in-out duration-300`}
        >
          <button
            className="bg-white text-black absolute top-6 right-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image className="w-12" src={closeIcon} alt="close icon" />
          </button>

          <div>
            <div className="md:w-full bg-white pt-8 px-3 border-r border-r-solid border-r-slate-400 flex flex-col gap-4">
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
                  <li className="list-none text-darkishgray text-lg">
                    My Profile
                  </li>
                </div>
              </Link>

              <Link href="/dashboard">
                <div className="flex flex-row gap-3 mt-3 font-semibold hover:bg-lightishblue hover:border-l-4 hover:border-l-solid hover:border-l-primaryPurple hover:rounded-md p-2">
                  <Image src={chart} alt="chart" className="w-6 h-6" />
                  <li className="list-none text-darkishgray text-lg">
                    Dashboard
                  </li>
                </div>
              </Link>

              <Link href="/trades">
                <div className="flex flex-row gap-3 mt-3 font-semibold hover:bg-lightishblue hover:border-l-4 hover:border-l-solid hover:border-l-primaryPurple hover:rounded-md p-2">
                  <Image src={statusup} alt="status up" className="w-6 h-6" />
                  <li className="list-none text-darkishgray text-lg">
                    My Trades
                  </li>
                </div>
              </Link>

              <Link href="/">
                <div className="flex flex-row justify-between items-center flex-wrap mt-2 font-semibold hover:bg-lightishblue hover:border-l-4 hover:border-l-solid hover:border-l-primaryPurple hover:rounded-md p-2">
                  <div className="flex flex-row gap-3 flex-wrap">
                    <Image
                      src={receiptitem}
                      alt="receipt item"
                      className="w-6 h-6"
                    />
                    <li className="list-none text-darkishgray text-md">
                      My Subscriptions
                    </li>
                  </div>
                  <span className="bg-green-400 px-2 py-1 text-[10px] text-white">
                    weekly
                  </span>
                </div>
              </Link>

              <div className="mt-56 flex-col gap-12">
                <Link href="/settings">
                  <div className="flex flex-row items-center gap-3 hover:bg-lightishblue hover:border-l-4 hover:border-l-solid hover:border-l-primaryPurple hover:rounded-md p-2">
                    <Image src={settings} alt="settings" className="w-6 h-6" />
                    <h2 className="text-lg text-darkishgray font-semibold">
                      Settings
                    </h2>
                  </div>
                </Link>

                <div
                  onClick={() => handleLogout()}
                  className="flex flex-row items-center gap-3 hover:bg-lightishblue hover:border-l-4 hover:border-l-solid hover:border-l-primaryPurple hover:rounded-md p-2"
                >
                  <Image src={logout} alt="settings" className="w-6 h-6" />
                  <h2 className="text-lg text-darkishgray font-semibold">
                    Log Out
                  </h2>
                </div>

                <div className="flex flex-row items-center gap-4 mt-8 border-t border-slate-300 pt-6">
                  <Image src={Avatar} alt="avatar" className="w-8 h-8" />
                  <div>
                    <h2 className="text-lg text-primaryPurple font-semibold">
                      Tony Stark
                    </h2>
                    <h2 className="text-md">tonystark@gmail4u.com</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
