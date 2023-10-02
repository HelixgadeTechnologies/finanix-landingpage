'use client';
import Footer from '../components/Footer';
import dashboardfinanixicon from '../public/images/dashboardfinanixicon.png';
import Image from 'next/image';

// Components
import Sidenav from '../components/Sidenav';
import SideBar from '../components/SideBar';

import isAuthenticated from '../utils/isAuthenticated';

const Compliance = () => {
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
            <h1 className="text-slate-700 text-3xl py-8 font-roboto font-semibold">
              Compliance and Regulation at Finanix
            </h1>

            <h3 className="mb-12 text-slate-700">
              At Finanix, we prioritize compliance with all applicable laws and
              regulations to ensure the highest level of security and
              transparency for our clients. Our commitment to regulatory
              standards is embedded in every aspect of our operations.
            </h3>

            <ol className="space-y-6 list-decimal text-slate-700">
              <li>
                {' '}
                Anti-Money Laundering (AML) and Know Your Customer (KYC): We
                strictly adhere to Anti-Money Laundering (AML) and Know Your
                Customer (KYC) procedures to verify the identity of our users
                and prevent any illicit activities.
              </li>

              <li>
                {' '}
                Data Security and Privacy: The protection of your personal and
                financial information is of utmost importance to us. We employ
                robust security measures and encryption protocols to safeguard
                your data.
              </li>
              <li>
                {' '}
                Licensing and Compliance: Finanix operates in compliance with
                the necessary licenses and regulations governing our industry,
                providing you peace of mind while trading and investing with us.
              </li>

              <li>
                Fair Practices and Transparency: We maintain a commitment to
                fair practices and transparency in all our dealings, ensuring
                that our clients&apos interests are always at the forefront.
              </li>
              <li>
                For any compliance-related inquiries or concerns, please
                don&apost hesitate to contact our dedicated compliance team.
              </li>
            </ol>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;

export async function getServerSideProps({ req }) {
  return isAuthenticated(req);
}
