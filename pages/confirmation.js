'use client';
import Footer from '../components/Footer';
import dashboardfinanixicon from '../public/images/dashboardfinanixicon.png';
import Image from 'next/image';
import personalaccounticon from '../public/images/personalaccounticon.png';
import receiptitem from '../public/images/receiptitem.png';
import statusup from '../public/images/statusup.png';
import chart from '../public/images/chart.png';
import Link from 'next/link';
import settings from '../public/images/setting.png';
import Avatar from '../public/images/Avatar.png';
import logout from '../public/images/logout.png';
import forbidden from '../public/images/forbidden.png';
import timer from '../public/images/timer.png';
import trendup from '../public/images/trendup.png';
import Walletfill from '../public/images/Walletfill.png';
import percentagecircle from '../public/images/percentagecircle.png';
import Arrowup from '../public/images/Arrowup.png';
import menunavbar from '../public/images/menunavbar.png';
import Sidenav from '../components/Sidenav';
import cloudicon from '../public/icons/cloudicon.png';
import US from '../public/images/US.png';
import { useEffect, useMemo, useState } from 'react';
import home from '../public/images/home.png';
import dynamic from 'next/dynamic';

const Confirmation = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-backgroundgray p-6 md:min-h-screen">
        {/* <div className='w-full flex flex-col'> */}
        <h2 className="text-headingcolorgray text-3xl pt-8 pb-3 font-roboto font-semibold">
          Please check your email.
        </h2>
        <p className="text-slate-600">
          {' '}
          We&lsquove sent a code to tonystark@gmail4u.com{' '}
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
