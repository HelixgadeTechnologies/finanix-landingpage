import Head from 'next/head';
import Image from 'next/image';
import Bitcoinlogo from '../public/images/illustration.svg';
import Bitcoinlines from '../public/images/vector.png';
import tether98 from '../public/images/tether98.png';
import coinbaselogo from '../public/images/coinbaselogo.png';
import bitmexlogo from '../public/images/bitmexlogo.png';
import binancelogo from '../public/images/binancelogo.png';
import bitcoin97 from '../public/images/bitcoin97.png';
import planchoice from '../public/images/planchoice.png';
import addfunds from '../public/images/addfunds.png';
import creataccount from '../public/images/creataccount.png';
import tickcircle from '../public/icons/tickcircle.png';
import right from '../public/images/right.png';
import closecircle from '../public/images/closecircle.png';
import TestimonialThree from '../public/images/TestimonialThree.png';
import testimonialOne from '../public/images/testimonialOne.png';
import testimonialTwo from '../public/images/testimonialTwo.png';
import minusicon from '../public/images/minusicon.png';
import plusicon from '../public/images/plusicon.png';
import shapes from '../public/images/shapes.png';
// import shapeTwo from '../public/images/shapeTwo.png'
// import shapeOne from '../public/images/shapeOne.png'
// import shapeThree from '../public/images/shapeThree.png'

export default function Home() {
  return (
    <div className="bg-white">
      <section className="w-full h-[500px] bg-primaryPurple relative flex flex-col items-center pt-6 px-3 font-Yukita-Sans md:pt-12 sm:h-[1000px] md:h-[1000px]">
        <div className="flex flex-col gap-6 md:gap-6">
          <div className="space-y-2">
            <h1 className="text-white text-2xl font-bold text-center sm:text-3xl  md:text-6xl">
              Discover Your Visual Investment Manager
            </h1>
          </div>

          <p className="text-white text-sm max-w-xs text-center mx-auto md:text-lg md:max-w-prose">
            Are you ready to seize the opportunities in the digital realm of
            cryptocurrencies?
          </p>
          <button className="bg-black text-white py-3 text-center w-full rounded-lg md:w-44 md:mx-auto">
            Learn More
          </button>
        </div>
        <Image
          src={Bitcoinlogo}
          width={1000}
          height={1000}
          alt="bitcoin logo"
          className="absolute top-1/2 z-40 p-3 sm:top-1/3 md:1/2"
        />
        <Image
          src={Bitcoinlines}
          alt="bitcoin lines"
          className="absolute w-full top-[450px] p-3 sm:top-2/3 md:top-[650px]"
        />
      </section>

      <section className="bg-blueGray w-full mt-36 pb-24 p-3 md:mt-72 md:pt-24">
        <h1 className="font-bold text-4xl text-center mb-6">
          Our Top Partners
        </h1>
        <div className="flex flex-row justify-around flex-wrap gap-3 mt-3 md:mt-12">
          <Image src={binancelogo} alt="binance logo" className="w-28 h-6" />
          <Image src={coinbaselogo} alt="coinbase logo" className="w-28 h-6" />
          <Image
            src={bitcoin97}
            alt="bitcoin mini logo"
            className="w-24 md:w-28 h-6"
          />
          <Image src={tether98} alt="tether98" className="w-28 h-8" />
          <Image
            src={bitmexlogo}
            alt="bitmex logo"
            className="w-24 h-4 mt-2 md:w-28 md:mt-0"
          />
        </div>

        <div className="w-full md:w-2/3 bg-darkBlueBlack text-yellowbg flex flex-col gap-12 mx-auto mt-24 p-12 rounded-lg md:gap-2 md:p-6  md:flex-row md:flex-1 md:justify-center">
          <div className="flex-1 text-center border-b-2 border-blue-50 border-w-6 pb-6 md:border-none">
            <h2 className="text-6xl md:text-4xl">71k</h2>
            <p>People have Joined</p>
          </div>
          <div className="flex-1 text-center pb-6 border-b-2 border-blue-50 md:border-x-2 md:border-x-slate-50 md:border-b-0">
            <h2 className="text-6xl md:text-4xl">49k</h2>
            <p>VVIP Users Have Joined</p>
          </div>
          <div className="flex-1 text-center">
            <h2 className="text-6xl md:text-4xl">20+</h2>
            <p>Big Companies Have Joined</p>
          </div>
        </div>
      </section>

      <section className="w-full">
        <h1 className="text-4xl max-w-sm font-bold text-center mx-auto pt-6 md:py-24">
          Get Started in Just A Few Minutes
        </h1>
        <div className="py-32 w-full p-3 relative md:bg-lightGray">
          <div className="flex flex-col gap-12 md:flex-row md:justify-center md:absolute md:-top-20 md:inset-x-0">
            <Image
              src={creataccount}
              alt="account creation"
              className="w-full md:w-72 md:h-72"
            />
            <Image
              src={addfunds}
              alt="add funds to your account"
              className="w-full md:w-72 md:h-72"
            />
            <Image
              src={planchoice}
              alt="choose a plan"
              className="w-full md:w-72 md:h-72"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center flex-wrap items-center px-3 pb-12 gap-3 md:flex-row md:p-12">
          <Image src={right} alt="right image" />

          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-4xl">About Finanix</h1>
            <p className="text-darkBlueBlack max-w-lg leading-7 text-lg">
              At Finanix, we are pioneers in revolutionizing cryptocurrency
              trading and investment management. Powered by advanced AI
              algorithms and a team of financial experts, we offer a secure and
              efficient platform for you to navigate the world of Bitcoin with
              ease.
            </p>
            <span className="flex flex-row gap-2 font-bold text-md ">
              <Image src={tickcircle} alt="tick box" />
              <p> Trade Smarter, Not Harder</p>
            </span>

            <span className="flex flex-row gap-2 font-bold text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> Secure Your Financial Future</p>
            </span>

            <span className="flex flex-row gap-2 font-bold text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> Maximize Your Profits</p>
            </span>
          </div>
        </div>
      </section>

      <section className="bg-blueGray p-4 md:p-12">
        <h1 className="mx-auto text-4xl max-w-md text-center font-bold mb-12">
          Pick A Plan Thats <br />
          Right For You
        </h1>

        <div className="flex flex-row flex-wrap w-full gap-6 justify-center">
          <div className="py-8 px-4 shadow-xl border border-slate-300 rounded-lg flex flex-col gap-3 w-full md:w-fit">
            <h2 className="text-center text-xl font-bold mb-2 bg-gray-200 w-fit mx-auto px-2">
              DAILY
            </h2>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p>Secure Your Financial Future</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p>Min. Deposit: $20,000</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p>Max. Deposit: $150,000</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p>Daily Withdrawals</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p>Compound Interest</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={closecircle} alt="tick box" />
              <p className="text-red-400">Deposit Bonus</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={closecircle} alt="tick box" />
              <p className="text-red-400"> AI Support</p>
            </span>

            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p>Dedicated Account Manager</p>
            </span>

            <button className="bg-primaryPurple text-white mt-3 py-3 rounded-lg">
              Subscribe Now
            </button>
          </div>

          <div className="py-8 px-4 shadow-xl border border-slate-300 rounded-lg flex flex-col gap-3 w-full md:w-fit">
            <h2 className="text-center text-xl font-bold mb-2 bg-gray-200 w-fit mx-auto px-2">
              WEEKLY
            </h2>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> 5% ROI daily</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> Min. Deposit: $10,000</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> Max. Deposit: $250,000</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> Weekly Withdrawals</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> Compound Interest</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={closecircle} alt="tick box" />
              <p className="text-red-400"> Deposit Bonus</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={closecircle} alt="tick box" />
              <p className="text-red-400"> AI Support</p>
            </span>

            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> Dedicated Account Manager</p>
            </span>

            <button className="bg-primaryPurple text-white mt-3 py-3 rounded-lg">
              Subscribe Now
            </button>
          </div>

          <div className="py-8 px-4 shadow-xl border border-slate-300 rounded-lg flex flex-col gap-3 w-full md:w-fit">
            <h2 className="text-center text-xl font-bold mb-2 bg-gray-200 w-fit mx-auto px-2">
              MONTHLY
            </h2>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> 10% ROI daily</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> Min. Deposit: $5,000</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> Max. Deposit: $500,000</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> Monthly Withdrawals</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> Compound Interest</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> 5% Deposit Bonus</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> AI Support</p>
            </span>

            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> Dedicated Account Manager</p>
            </span>

            <button className="bg-primaryPurple text-white mt-3 py-3 rounded-lg">
              Subscribe Now
            </button>
          </div>

          <div className="py-8 px-4 shadow-xl border border-slate-300 rounded-lg flex flex-col gap-3 w-full md:w-fit">
            <h2 className="text-center text-xl font-bold mb-2 bg-gray-200 w-fit mx-auto px-2">
              YEARLY
            </h2>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> 15% ROI daily</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> Min. Deposit: $1,500</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> Max. Deposit: Unlimited</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> Yearly Withdrawals</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> Compound Interest</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> 10% Deposit Bonus</p>
            </span>
            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> AI Support</p>
            </span>

            <span className="flex flex-row gap-2 text-md">
              <Image src={tickcircle} alt="tick box" />
              <p> Dedicated Account Manager</p>
            </span>

            <button className="bg-primaryPurple text-white mt-3 py-3 rounded-lg">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <h1 className="py-12 text-3xl w-full text-center mx-auto font-bold md:text-5xl md:w-3/4 md:text-left">
          What Everyone Says...
        </h1>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:flex-wrap md:flex-nowrap md:w-3/4 mx-auto md:overflow-x-auto ...">
          <Image
            src={testimonialOne}
            alt="testimonials"
            className="w-full sm:w-72  h-1/4"
          />
          <Image
            src={testimonialTwo}
            alt="testimonials"
            className="w-full sm:w-72  h-1/4"
          />
          <Image
            src={TestimonialThree}
            alt="testimonials"
            className="w-full sm:w-72  h-1/4"
          />
          <Image
            src={testimonialTwo}
            alt="testimonials"
            className="w-full sm:w-72  h-1/4"
          />
          <Image
            src={testimonialOne}
            alt="testimonials"
            className="w-full sm:hidden sm:w-72 md:block md:w-72 h-1/4"
          />
          {/* <Image src={testimonialOne} alt='testimonials'/> */}
        </div>

        <div className="p-3">
          <h1 className="text-2xl text-center py-6 font-bold md:text-6xl">
            Frequently Asked Questions
          </h1>
          <h3 className="text-center text-xl">
            Have Questions? We Have Answers!
          </h3>

          <div className="max-w-3xl mx-auto mt-24">
            <div className="hidden md:flex md:flex-row md:justify-between md:items-center">
              <h2 className="text-2xl font-bold">
                Are my investments safe with Finanix?
              </h2>
              <Image src={minusicon} alt="minus sign" />
            </div>
            <p className="hidden md:block">
              Absolutely! Your security is our top priority. Our platform
              utilizes top-notch encryption and security protocols to ensure the
              safety of your funds and personal data.
            </p>

            <div className="flex flex-row mt-12 justify-between items-center">
              <h2 className="text-2xl font-bold max-w-sm md:max-w-prose">
                How do i get started?
              </h2>
              <Image src={plusicon} alt="minus sign" className="w-12 h-12" />
            </div>

            <div className="flex flex-row mt-12 justify-between items-center">
              <h2 className="text-2xl font-bold max-w-sm md:max-w-prose">
                How does AI support work?
              </h2>
              <Image src={plusicon} alt="minus sign" className="w-12 h-12" />
            </div>

            <div className="flex flex-row mt-12 justify-between items-center">
              <h2 className="text-2xl font-bold max-w-sm md:max-w-prose">
                Can i use Finanix from anywhere in the world?
              </h2>
              <Image src={plusicon} alt="minus sign" className="w-12 h-12" />
            </div>

            <div className="flex flex-row mt-12 justify-between items-center">
              <h2 className="text-2xl font-bold max-w-sm md:max-w-prose">
                What is Arbitrage trading?
              </h2>
              <Image src={plusicon} alt="minus sign" className="w-12 h-12" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-darkishBlueGray py-8">
        <div className="flex flex-col-reverse mt-6 relative w-full md:flex-row">
          <Image src={shapes} className="w-1/2 md:w-2/3" />
          {/* <Image src={shapeTwo} className='hidden lg:block md:fixed md:top-44 lg:left-1/3'/>
          <Image src={shapeThree} className='hidden lg:block md:fixed md:top-44 lg:left-[38vw]'/>
          <Image src={shapeOne} className='hidden lg:block md:fixed md:top-[] lg:left-[43vw]'/> */}

          <div className="text-white text-center mx-auto md:mt-12 md:text-left md:mx-2">
            <h1 className="text-3xl max-w-sm font-bold">
              Join a new generation of investors today.
            </h1>
            <button className="bg-white py-3 px-6 rounded-3xl text-black mt-6 font-bold">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
