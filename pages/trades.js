'use client';
import Footer from '../components/Footer';
import dashboardfinanixicon from '../public/images/dashboardfinanixicon.png';
import Image from 'next/image';

//Components
import Sidenav from '../components/Sidenav';

import { useState } from 'react';

import TradesModalset from './tradesmodalset';
import SideBar from '../components/SideBar';

//Utils
import isAuthenticated from '../utils/isAuthenticated';

const Trades = () => {
  const [isTradeModalShown, setIsTradeModalShown] = useState(true);

  const handleToggleModal = () => {
    setIsTradeModalShown(false);
  };

  return (
    <div>
      <div className="w-full flex flex-col xl:flex-row">
        <SideBar />

        <div className="w-full">
          <div className="p-2 flex flex-row w-full justify-between items-center xl:hidden">
            <Image
              src={dashboardfinanixicon}
              alt="finanix icon"
              className="w-30 h-8"
            />
            <div>
              <Sidenav />
            </div>
          </div>
          <div className="w-full bg-backgroundgray p-6 md:min-h-screen">
            <h2 className="text-black text-3xl py-8 font-roboto font-semibold">
              My Trades
              {isTradeModalShown && (
                <TradesModalset onHandleModal={handleToggleModal} />
              )}
            </h2>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trades;

export async function getServerSideProps({ req }) {
  return isAuthenticated(req);
}
