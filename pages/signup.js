import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import toast, { Toaster } from 'react-hot-toast';

import supabase from '../config/supabase.config';

const SignUp = () => {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const signUp = async () => {
    console.log({ firstName, lastName, email, password });
    try {
      setIsLoading(true);
      let { data, error } = await supabase.auth.signUp({
        email,
        password,

        options: {
          data: {
            firstName,
            lastName,
            avatar:
              'https://qwpqhfvjvbzxwgovbape.supabase.co/storage/v1/object/sign/avatars/Default_profile.svg.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL0RlZmF1bHRfcHJvZmlsZS5zdmcucG5nIiwiaWF0IjoxNjk1NzM5NjU5LCJleHAiOjE3MjcyNzU2NTl9.Lxq5C26R-amsNAFvV6AFuf_xecpCI47QNCA88QWsUOU&t=2023-09-26T14%3A47%3A39.195Z',
          },
        },
      });
      if (error) throw error;
      console.log(data);
      router.push(`/confirmation/${email}`);
    } catch (error) {
      console.error(error.message);
      toast(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const googleSignIn = async () => {
    try {
      const result = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });

      console.log('user', result);

      if (result.error) throw error;
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
            Sign Up!
          </h1>

          <p className="py-1 text-[14px] text-[#475467] mb-4">
            Join the crypto revolution and secure your spot today.
          </p>

          <div className="sm:pr-10">
            <label className="text-[14px] text-gray font-medium">
              First Name*
            </label>

            <input
              className="block border border-solid border-ash rounded-lg w-full py-2.5 px-3.5 mt-1 mb-4"
              placeholder="Enter your First Name"
              type="text"
              name="firstname"
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label className="text-[14px] text-gray font-medium">
              Last Name*
            </label>
            <input
              className="block border border-solid border-ash rounded-lg w-full py-2.5 px-3.5 mt-1 mb-4"
              placeholder="Enter your Last Name"
              type="text"
              name="lastname"
              onChange={(e) => setLastName(e.target.value)}
            />

            <label className="text-[14px] text-gray font-medium">Email*</label>
            <input
              className="block border border-solid border-ash rounded-lg w-full py-2.5 px-3.5 mt-1 mb-4"
              placeholder="Example@email.com"
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="text-[14px] text-gray font-medium">
              Password
            </label>
            <input
              className="block border border-solid border-ash rounded-lg w-full py-2.5 px-3.5 mt-1 mb-4"
              placeholder="At least 8 characters"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
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
              onClick={() => signUp()}
              className="block w-full py-2.5 px-5 bg-primaryPurple text-white mt-4 rounded-lg"
            >
              {!isLoading ? (
                <span>Sign Up</span>
              ) : (
                <div className="">Loading...</div>
              )}
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
                alt="facebook"
                className="mr-2"
              />{' '}
              Sign up with Google
            </div>

            <div className="py-2.5 text-center bg-[#F3F9FA] text-[#313957] m-4 flex justify-center items-center cursor-pointer">
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
              <Link className="text-primaryPurple " href="/login">
                Log In
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
