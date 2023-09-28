import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import toast, { Toaster } from 'react-hot-toast';
import cookie from 'react-cookies';

import supabase from '../config/supabase.config';

const SignUp = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    console.log({ email, password });
    try {
      setIsLoading(true);
      let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password,
      });

      console.log('error', error);
      if (error) throw error;
      console.log(data);
      cookie.save('user', data.user);
      router.push('/profile');
    } catch (error) {
      console.error(error.message);
      toast(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const googleSignIn = async () => {
    try {
      const { user, error } = await supabase.auth.signInWithOAuth(
        {
          provider: 'google',
        },
        {
          redirectTo: 'https://finanix-landingpage-fawn.vercel.app/profile',
        }
      );

      console.log('user', user);

      if (error) throw error;
    } catch (error) {
      console.error(error);
    }
  };

  const facebookSignIn = async () => {
    try {
      const { user, error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
      });

      console.log('user', user);

      if (error) throw error;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: 'bg-white text-red-700',
          duration: 5000,
          style: {
            background: '#fff',
            color: 'red',
            border: `1px solid red`,
          },
        }}
      />
      <div className="flex p-[24px] justify-between gap-10">
        <div className="form  sm:w-1/2	sm:pt-32 sm:pl-32">
          <h1 className="text-[18px] sm:text-[40px] font-semibold font-inter">
            Log in to your account!
          </h1>

          <p className="py-1 text-[14px] text-[#475467] mb-4">
            Please enter your login details
          </p>

          <div className="sm:pr-10">
            <label className="text-[14px] text-gray font-medium">Email*</label>
            <input
              className="block border border-solid border-ash rounded-lg w-full py-2.5 px-3.5 mt-1 mb-4"
              placeholder="Example@email.com"
              name="email"
              onClick={(e) => setEmail(e.target.value)}
            />

            <label className="text-[14px] text-gray font-medium">
              Password
            </label>
            <input
              className="block border border-solid border-ash rounded-lg w-full py-2.5 px-3.5 mt-1 mb-4"
              placeholder="At least 8 characters"
              type="password"
              onClick={(e) => setPassword(e.target.value)}
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

            <button
              onClick={() => login()}
              className="block w-full py-2.5 px-5 bg-primaryPurple text-white mt-4 rounded-lg"
            >
              {!isLoading ? (
                <span>Log In</span>
              ) : (
                <div className="">Loading...</div>
              )}{' '}
            </button>

            <div className="flex justify-between pt-4">
              <span></span>
              <span>Or</span>
              <span></span>
            </div>

            <div
              onClick={() => googleSignIn()}
              className="py-2.5 text-center bg-[#F3F9FA] text-[#313957] m-4 flex justify-center items-center cursor-pointer"
            >
              <Image
                src={'/images/Google.png'}
                height={20}
                width={20}
                alt="google"
                className="mr-2"
              />{' '}
              Sign up with Google
            </div>

            <div
              onClick={() => facebookSignIn()}
              className="py-2.5 text-center bg-[#F3F9FA] text-[#313957] m-4 flex justify-center items-center cursor-pointer"
            >
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
              <Link className="text-primaryPurple " href="/signup">
                Sign Up
              </Link>{' '}
            </p>
          </div>
        </div>

        <div className="image bg-auth-background bg-no-repeat	bg-center	 w-1/2 hidden sm:block rounded-3xl	"></div>
      </div>
    </div>
  );
};

export default SignUp;
