'use client';
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import cookie from 'react-cookies';

import Footer from '../components/Footer';
import dashboardfinanixicon from '../public/images/dashboardfinanixicon.png';
import Image from 'next/image';

//Components
import SideBar from '../components/SideBar';
import Sidenav from '../components/Sidenav';
import cloudicon from '../public/icons/cloudicon.png';
import US from '../public/images/US.png';
import { useEffect, useState } from 'react';

import supabase from '../config/supabase.config';
import isAuthenticated from '../utils/isAuthenticated';

const Profile = () => {
  const fileInputRef = useRef();

  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [avatar, setAvatar] = useState('');

  const setDefault = async () => {
    const user = cookie.load('user');

    setUser(user);
    const { firstName, lastName, role, country, phone, avatar } =
      user.user_metadata;

    setFirstName(firstName);
    setLastName(lastName);
    setRole(role);
    setCountry(country);
    setPhone(phone);
    setAvatar(avatar);
  };

  const update = async (e) => {
    if (e) e.preventDefault();

    try {
      setIsLoading(true);

      const { data, error } = await supabase.auth.updateUser({
        data: { firstName, lastName, role, country, phone, avatar },
      });

      toast('Update Successfull!');

      if (error) throw error;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fileUpload = async (e) => {
    try {
      setIsLoading(true);
      if (e) e.preventDefault();

      const file = fileInputRef.current.files[0];
      console.log('file', file);

      const { data, error } = await supabase.storage
        .from('avatars')
        .upload(`/${file.name}`, file, {
          cacheControl: '3600',
          upsert: true,
        });

      if (error) throw error;

      console.log('process', process.env.NEXT_PUBLIC_SUPABASE_STORAGE);
      const avatar = `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE}/${data.path}`;
      console.log('avatar', avatar);

      setAvatar(avatar);

      update();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setDefault();
  }, []);

  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: 'bg-white text-primary-green',
          duration: 5000,
          style: {
            background: '#fff',
            color: '#125252',
            border: `1px solid #125252`,
          },
        }}
      />

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
              My Profile
            </h2>

            <div className="space-y-2">
              <p className="text-black font-semibold text-lg">Personal info</p>

              <p className="text-textGray text-sm">
                Update your photo and personal details here.
              </p>
            </div>

            <form>
              <div className="flex-col py-6 border-t border-solid border-slate-300 mt-12 w-full">
                <div className="w-full space-y-6 md:w-3/4">
                  <div className="flex flex-col items-start gap-4 w-full md:flex-row justify-between ">
                    <label className="w-full md:w-1/3 text-textdarkgray">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="border border-solid border-slate-300 w-full p-3 outline-none rounded-lg shadow-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-4 w-full md:flex-row justify-between">
                    <label className="w-full text-textdarkgray md:w-1/3">
                      Last Name
                    </label>
                    <input
                      type="text"
                      onChange={(e) => setLastName(e.target.value)}
                      className="border border-solid border-slate-300 w-full p-3 outline-none rounded-lg shadow-sm"
                      value={lastName}
                    />
                  </div>
                </div>
              </div>

              <div className="flex-col py-6 border-t border-solid border-slate-300 w-full">
                <div className="w-full space-y-6 md:w-3/4">
                  <div className="flex flex-col gap-4 w-full md:flex-row justify-between">
                    <label className="w-full md:w-1/3 text-textdarkgray">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={user?.email}
                      disabled
                      className="border border-solid border-slate-300 w-full p-3
                                 outline-none rounded-lg shadow-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="py-6 border-t border-solid border-slate-300 w-full">
                <div className="w-full md:w-3/4">
                  <div className="flex flex-col gap-4 lg:flex-row md:justify-start">
                    <div className="space-y-2 w-full md:w-1/3">
                      <p className="text-textdarkgray font-semibold text-md">
                        Your photo
                      </p>

                      <p className="text-textdarkgray text-sm">
                        This will be displayed on your profile.
                      </p>
                    </div>

                    <div className="flex flex-col gap-6 md:flex-row">
                      <Image
                        src={avatar}
                        width={100}
                        height={100}
                        alt="avatar"
                        className="w-12 h-12 rounded-full	"
                      />

                      <div className="border border-solid border-slate-300 w-full mx-auto flex flex-col items-center py-6 md:w-[500px]">
                        <button className="w-fit p-1 rounded-full mb-6">
                          <Image
                            src={cloudicon}
                            alt="cloud icon"
                            className="w-6 h-5"
                          />
                        </button>
                        <p className="text-profiletextgray text-sm">
                          <span>
                            <input
                              type="file"
                              className="hidden"
                              ref={fileInputRef}
                              onChange={fileUpload}
                            />
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                fileInputRef.current?.click();
                              }}
                              className="text-primaryPurple text-md font-semibold"
                            >
                              Click To Upload{' '}
                            </button>
                          </span>{' '}
                          or drag and drop
                        </p>
                        <p className="text-profiletextgray text-sm">
                          SVG, PNG, JPG or GIF (max. 800x400px)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-col py-6 border-t border-solid border-slate-300 w-full">
                <div className="w-full space-y-6 md:w-3/4">
                  <div className="flex flex-col gap-4 w-full md:flex-row justify-between">
                    <label className="w-full md:w-1/3 text-textdarkgray">
                      Role
                    </label>
                    <input
                      type="text"
                      name="role"
                      id="email"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="Tech Enthusiast"
                      className="border border-solid border-slate-300 w-full p-3
                                 outline-none rounded-lg shadow-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-col py-6 border-y border-solid border-slate-300 w-full">
                <div className="w-full space-y-6 md:w-3/4">
                  <div className="flex flex-col gap-4 w-full md:flex-row justify-between">
                    <label className="w-full md:w-1/3 text-textdarkgray">
                      Country
                    </label>

                    <select
                      className="border border-solid border-slate-300 w-full p-3
                                 outline-none rounded-lg shadow-sm"
                    >
                      <option>United States</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-4 w-full md:flex-row justify-between">
                    <label className="w-full md:w-1/3 text-textdarkgray">
                      Phone
                    </label>
                    <div className="w-full flex flex-row gap-3">
                      <div className="flex flex-row items-center border border-solid border-slate-300 gap-2 px-4 py-3 rounded-lg shadow-sm">
                        <Image
                          src={US}
                          alt="united states"
                          className="w-4 h-4"
                        />
                        <p>+1</p>
                      </div>
                      <input
                        type="number"
                        onChange={(e) => setPhone(e.target.value)}
                        className="border border-solid border-slate-300 p-3
                                 outline-none rounded-lg shadow-sm flex-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-6 flex flex-row gap-2 justify-end">
                <button className="border border-solid border-slate-300 px-3 py-2 rounded-lg">
                  Cancel
                </button>
                <button
                  onClick={(e) => update(e)}
                  className="px-4 py-2 bg-primaryPurple text-white rounded-lg"
                >
                  {isLoading ? 'Loading...' : 'Save'}
                </button>
              </div>
            </form>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

export async function getServerSideProps({ req }) {
  return isAuthenticated(req);
}
