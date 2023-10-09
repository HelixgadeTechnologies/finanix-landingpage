'use client';
import Footer from '../components/Footer';
import dashboardfinanixicon from '../public/images/dashboardfinanixicon.png';
import Image from 'next/image';

//Components
import Sidenav from '../components/Sidenav';
import SideBar from '../components/SideBar';

const AboutUs = () => {
  
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
          <div className="w-full bg-backgroundgray px-6 pt-6 pb-12 md:min-h-screen">
            <h2 className="text-headingcolorgray text-3xl py-8 font-roboto font-semibold">
            About Finanix: Your Path to Financial Prosperity 
            </h2>

            <div className='text-textdarkgray'>
              <p className='text-textdarkgray text-lg'>
                At Finanix, we believe in the power of financial freedom. We understand that each individual&#39;s
                financial journey is unique, and that&#39;s<br/> why we're here to empower you with the tools and knowledge
                to achieve your financial goals, whatever they may be.
              </p>

              <p className='mt-6 text-lg'>
            <strong className='text-xl'>Our Mission:</strong><br/>
                Empower individuals worldwide to take control of their financial future by providing accessible,
                innovative, and personalized<br /> investment solutions.

              </p>
              
              <p className='mt-6 text-lg'>
               <strong className='text-xl'>Who We Are:</strong><br/>
                Finanix is a trusted name in the world of finance, driven by a team of passionate experts who are dedicated
                to helping you build and protect your wealth. With years of experience and a commitment to excellence,
                we have earned the trust of investors across the globe.

              </p>

            <h2 className='font-bold text-xl mt-6 mb-6'> What We Offer:</h2> 
              
              <ol className='list-decimal max-w-6xl text-lg ml-6 space-y-6'>

                <li>
                  Diverse Investment Options: We offer a wide range
                  of investment plans to suit your needs, whether you're
                  looking for short-term gains or <br/>long-term stability.
                </li>

                <li>
                  AI-Powered Insights: Harness the potential of artificial
                  intelligence with our cutting-edge tools that provide real-time
                  market analysis and personalized investment recommendations.
                </li>

                <li>
                  Unparalleled Support: Our team of financial advisors and customer
                  support professionals are here to assist you at every
                  step of your financial journey.
                </li>

                <li>
                  Security and Trust: We prioritize the security
                  of your investments, using industry-leading
                  technology to protect your assets and data.
                </li>
              </ol>
             
              <h2 className='font-bold text-xl mt-6 mb-6'>  Why Choose Finanix:</h2> 
              
              <ol className='list-decimal max-w-6xl text-lg ml-6 space-y-6 '>
                <li>
                  Transparency: We believe in transparent
                  and honest financial practices. You'll always
                  know where your money is and how it&#39;s working for you.
                </li>

                <li>
                  Innovation: We stay at the forefront of technological
                  advancements to bring you the latest in investment opportunities and tools.
                </li>

                <li>
                  Global Reach: Finanix connects you to global markets,
                  helping you diversify your portfolio and explore opportunities beyond borders.
                </li>

                <li>
                  Your Success is Our Success: We measure our success
                  by your financial achievements. When you win, we win.
                </li>
              </ol>





              <h2 className='font-bold text-xl mt-6 mb-6'>
                Join the Finanix Family:
              </h2>
              <p className='text-lg'>
                Your financial journey starts here. Whether you're new to investing
                or a seasoned pro, Finanix is your trusted partner. We're here to provide
                you with the knowledge, tools, and support you need to make informed financial
                decisions and achieve your dreams.
              </p>

              <p className='text-lg mt-6 mb-6'>
              Let&#39;s embark on this journey together. Welcome to Finanix, where financial prosperity begins.
              </p>
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

export default AboutUs;