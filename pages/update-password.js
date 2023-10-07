import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import toast, { Toaster } from 'react-hot-toast';
import cookie from 'react-cookies';

import supabase from '../config/supabase.config';

const UpdatePassword = () => {
  const router = useRouter();

  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const forgotPassword = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.updateUser({
        password,
      });

      console.log(data);
      console.log('error', error);
      if (error) throw error;

      //   router.push('/profile');
    } catch (error) {
      console.error(error.message);
      toast(error.message);
    } finally {
      setIsLoading(false);
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
      <div className="flex flex-col	sm:flex-row p-[24px] sm:justify-between gap-10 ">
        <div className="form  sm:w-1/2	sm:pt-32 sm:pl-32">
          <h1 className="text-[18px] sm:text-[40px] font-semibold font-inter">
            Update Password
          </h1>

          <p className="py-1 text-[14px] text-[#475467] mb-4">
            Please enter your new password
          </p>

          <div className="sm:pr-10">
            <label className="text-[14px] text-gray font-medium">
              Password*
            </label>
            <input
              className="block border border-solid border-ash rounded-lg w-full py-2.5 px-3.5 mt-1 mb-4"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={() => forgotPassword()}
              className="block w-full py-2.5 px-5 bg-primaryPurple text-white mt-4 rounded-lg"
            >
              {!isLoading ? (
                <span>Submit</span>
              ) : (
                <div className="">Loading...</div>
              )}{' '}
            </button>
          </div>
        </div>

        <div className="image bg-auth-background bg-no-repeat	bg-center	 w-1/2 hidden sm:block rounded-3xl	"></div>
      </div>
    </div>
  );
};

export default UpdatePassword;
