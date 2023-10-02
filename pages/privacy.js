'use client';
import Footer from '../components/Footer';
import dashboardfinanixicon from '../public/images/dashboardfinanixicon.png';
import Image from 'next/image';

//Components
import Sidenav from '../components/Sidenav';
import SideBar from '../components/SideBar';

import isAuthenticated from '../utils/isAuthenticated';

const Privacy = () => {
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
            <h1 className="text-slate-900 text-3xl py-8 font-roboto font-semibold">
              Privacy Policy
            </h1>

            <h3 className="mb-12 text-slate-700">
              At Finanix, we recognize the significance of privacy and are
              committed to protecting the confidentiality of your personal
              information. Our Privacy Policy outlines how we collect, use, and
              protect your data.
            </h3>

            <ol className="space-y-6 px-6 pb-6 list-decimal text-slate-700">
              <li>
                Information Collection: We collect only the necessary personal
                information to provide you with our services and comply with
                legal requirements. This includes identification data, contact
                details, and transaction history.
              </li>

              <li>
                {' '}
                Data Security: We employ industry-standard security measures to
                safeguard your data from unauthorized access, alteration, or
                disclosure.
              </li>
              <li>
                {' '}
                Information Sharing: Your personal information is never sold,
                rented, or shared with third parties for marketing purposes. We
                may share data with trusted partners for specific purposes, such
                as regulatory compliance.
              </li>

              <li>
                Cookies and Tracking Technologies: We use cookies and similar
                technologies to enhance your experience on our platform and
                gather analytical insights. You can manage your cookie
                preferences in your browser settings.
              </li>
              <li>
                Communication Preferences: You can control how we communicate
                with you regarding promotions, updates, and news by adjusting
                your preferences in your account settings.
              </li>
            </ol>

            <p className="text-slate-700">
              Please review our complete Privacy Policy for a comprehensive
              understanding of how we handle your data.
            </p>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

export async function getServerSideProps({ req }) {
  return isAuthenticated(req);
}
