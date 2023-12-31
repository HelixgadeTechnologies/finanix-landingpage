import Footer from '../components/Footer';
import dashboardfinanixicon from '../public/images/dashboardfinanixicon.png';
import Image from 'next/image';

import forbidden from '../public/images/forbidden.png';
import timer from '../public/images/timer.png';
import trendup from '../public/images/trendup.png';
import Walletfill from '../public/images/Walletfill.png';
import percentagecircle from '../public/images/percentagecircle.png';
import Arrowup from '../public/images/Arrowup.png';
import Sidenav from '../components/Sidenav';

//Components
import SideBar from '../components/SideBar';

import isAuthenticated from '../utils/isAuthenticated';

const Dashboard = () => {
  return (
    <div>
      <div className="w-full flex flex-col md:flex-row">
        <SideBar />

        <div className="w-full">
          <div className="p-2 flex flex-row w-full justify-between items-center md:hidden">
            <Image
              src={dashboardfinanixicon}
              alt="finanix icon"
              className="w-30 h-8"
            />
            <div>
              <Sidenav />
            </div>
          </div>
          <div className="w-full md:min-h-screen">
            <h2 className="bg-white text-black text-3xl p-8 font-roboto font-semibold">
              Welcome Tony Stark!
            </h2>
            <div className="bg-primaryOrange w-full p-3 flex flex-row justify-center items-center gap-6 text-white">
              <span>To proceed, please complete your verification process</span>
              <Image src={forbidden} alt="forbidden" className="w-6 h-6" />
            </div>

            <div className="w-full p-6 flex flex-col gap-3 sm:flex-row sm:justify-around sm:gap-1 sm:flex-wrap">
              <div className="w-full md:w-60 p-3 shadow-2xl rounded-lg">
                <div className="flex flex-row justify-between">
                  <div className="space-y-1">
                    <h2 className="text-textGray text-lg">WALLET</h2>
                    <h2 className="text-lg text-primaryPurple font-semibold">
                      $2500
                    </h2>
                  </div>
                  <div className="border border-solid border-slate-500 bg-primaryPurple w-fit h-fit p-2 rounded-full">
                    <Image
                      src={Walletfill}
                      alt="wallet icon"
                      className="w-4 h-4"
                    />
                  </div>
                </div>
                <button className="w-full bg-primaryPurple text-white py-3 rounded-lg mt-6">
                  Deposit Funds
                </button>
              </div>

              <div className="w-full md:w-60 p-3 border border-solid border-slate-300 rounded-lg">
                <div className="flex flex-row justify-between">
                  <div className="space-y-1">
                    <h2 className="text-textGray text-lg">TRADING BALANCE</h2>
                    <h2 className="text-lg text-primaryPurple font-semibold">
                      $2500
                    </h2>
                  </div>
                  <div className="border border-solid border-slate-500 bg-primaryPurple w-fit h-fit p-2 rounded-full">
                    <Image src={trendup} alt="trendup" className="w-4 h-4" />
                  </div>
                </div>
                <div className="w-full mt-6">
                  <h2 className="text-lg text-black font-semibold">20.49</h2>
                  <div className="flex flex-row gap-2 items-center">
                    <p className="text-textishred text-sm font-semibold">
                      $0.99
                    </p>
                    <span className="text-textGray">AVAILABLE</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-60 p-3 border border-solid border-slate-300 rounded-lg">
                <div className="flex flex-row justify-between">
                  <div className="space-y-1">
                    <h2 className="text-textGray text-lg font-semibold">
                      ACTIVE
                    </h2>
                    <h2 className="text-lg text-textGray font-semibold">
                      PLAN
                    </h2>
                  </div>
                  <div className="border border-solid border-slate-500 bg-primaryPurple w-fit h-fit p-2 rounded-full">
                    <Image src={timer} alt="wallet icon" className="w-4 h-4" />
                  </div>
                </div>
                <button className="w-full bg-primaryPurple text-white py-3 rounded-lg mt-6">
                  WEEKLY
                </button>
              </div>

              <div className="w-full md:w-60 p-3 border border-solid border-slate-300 rounded-lg">
                <div className="flex flex-row justify-between">
                  <div className="space-y-1">
                    <h2 className="text-textGray text-lg font-semibold">
                      RETURNS ON
                    </h2>
                    <h2 className="text-lg text-textGray font-semibold">
                      INVESTMENT
                    </h2>
                  </div>
                  <div className="border border-solid border-slate-500 bg-primaryPurple w-fit h-fit p-2 rounded-full">
                    <Image
                      src={percentagecircle}
                      alt="wallet icon"
                      className="w-4 h-4"
                    />
                  </div>
                </div>
                <div className="w-full mt-6">
                  <h2 className="text-lg text-black font-semibold">
                    2.5% daily
                  </h2>
                  <div className="flex flex-row gap-1 items-center">
                    <Image
                      src={Arrowup}
                      alt="arrow up"
                      className="w-3 h-3 mt-1"
                    />
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
  );
};

export default Dashboard;

export async function getServerSideProps({ req }) {
  return isAuthenticated(req);
}
