import FormDatas from '../components/FormData';
import Footer from '../components/Footer';
import dashboardfinanixicon from '../public/images/dashboardfinanixicon.png';
import Image from 'next/image';

import Sidenav from '../components/Sidenav';

//Components
import SideBar from '../components/SideBar';
import isAuthenticated from '../utils/isAuthenticated';

const Settings = () => {
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
              Settings
            </h2>

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
  );
};

export default Settings;

export async function getServerSideProps({ req }) {
  return isAuthenticated(req);
}
