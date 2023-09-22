import Link from 'next/link';
import Image from 'next/image';

const Login = () => {
  return (
    <div>
      <div className="flex p-[24px]">
        <div className="form">
          <h1 className="text-[18px] font-semibold font-inter">Sign Up!</h1>

          <p className="py-1 text-[14px] text-[#475467] mb-4">
            Join the crypto revolution and secure your spot today.
          </p>

          <label className="text-[14px] text-gray font-medium">
            First Name*
          </label>
          <input
            className="block border border-solid border-ash rounded-lg border-black w-full py-2.5 px-3.5 mt-1 mb-4"
            placeholder="Enter your First Name"
          />

          <label className="text-[14px] text-gray font-medium">
            Last Name*
          </label>
          <input
            className="block border border-solid border-ash rounded-lg border-black w-full py-2.5 px-3.5 mt-1 mb-4"
            placeholder="Enter your Last Name"
          />

          <label className="text-[14px] text-gray font-medium">Email*</label>
          <input
            className="block border border-solid border-ash rounded-lg border-black w-full py-2.5 px-3.5 mt-1 mb-4"
            placeholder="Example@email.com"
          />

          <label className="text-[14px] text-gray font-medium">Password</label>
          <input
            className="block border border-solid border-ash rounded-lg border-black w-full py-2.5 px-3.5 mt-1 mb-4"
            placeholder="At least 8 characters"
            type="password"
          />

          <p className="text-xs">
            I have read the{' '}
            <Link className="text-primaryPurple" href="/">
              Privacy Policy
            </Link>{' '}
            and agree to the{' '}
            <Link className="text-primaryPurple" href="/">
              Compliance Terms
            </Link>{' '}
            of Finanix.
          </p>

          <button className="block w-full py-2.5 px-5 bg-primaryPurple text-white mt-4 rounded-lg">
            Sign Up
          </button>

          <div className="flex justify-between pt-4">
            <span></span>
            <span>Or</span>
            <span></span>
          </div>

          <div className="py-2.5 text-center bg-[#F3F9FA] text-[#313957] m-4 flex justify-center items-center">
            <Image
              src={'/images/Google.png'}
              height={20}
              width={20}
              alt="facebook"
              className="mr-2"
            />{' '}
            Sign up with Google
          </div>

          <div className="py-2.5 text-center bg-[#F3F9FA] text-[#313957] m-4 flex justify-center items-center">
            <Image
              src={'/images/Facebook.png'}
              height={20}
              width={20}
              alt="facebook"
              className="mr-2"
            />{' '}
            Sign up with Facebook
          </div>

          <p className="text-center">
            Already have an account?{' '}
            <Link className="text-primaryPurple " href="/">
              Log In
            </Link>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
