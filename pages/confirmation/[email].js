import { useRouter } from 'next/router';

const Confirmation = () => {
  const router = useRouter();
  const { email } = router.query;

  return (
    <div className="w-full">
      <div className="w-full bg-backgroundgray p-6 md:min-h-screen">
        {/* <div className='w-full flex flex-col'> */}
        <h2 className="text-headingcolorgray text-3xl pt-8 pb-3 font-roboto font-semibold">
          Please check your email.
        </h2>
        <p className="text-slate-600">{`We have sent a code to ${email}`}</p>
      </div>
    </div>
  );
};

export default Confirmation;
