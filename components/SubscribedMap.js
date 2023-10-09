import tickcircle from '../public/icons/tickcircle.png';
import closecircle from '../public/images/closecircle.png';
import Image from 'next/image';

const SubscribedMap = () => {
  const SubscriptionsData = [
    {
      id: 1,
      duration: 'daily',
      plans: [
        '2.5% ROI daily',
        'Min. Deposit: $20,000',
        'Max. Deposit: $150,000',
        'Daily Withdrawals',
        'Compound Interest',
        'Deposit Bonus',
        'AI Support',
        'Dedicated Account Manager',
      ],
      subscribe: 'Subscribe Now',
    },

    {
      id: 2,
      duration: 'weekly',
      plans: [
        '5% ROI daily',
        'Min. Deposit: $10,000',
        'Max. Deposit: $250,000',
        'Weekly Withdrawals',
        'Compound Interest',
        'Deposit Bonus',
        'AI Support',
        'Dedicated Account Manager',
      ],
      subscribe: 'Active Plan',
    },

    {
      id: 3,
      duration: 'monthly',
      plans: [
        '10% ROI daily',
        'Min. Deposit: $5,000',
        'Max. Deposit: $500,000',
        'Monthly Withdrawals',
        'Compound Interest',
        '5% Deposit Bonus',
        'AI Support',
        'Dedicated Account Manager',
      ],
      subscribe: 'Subscribe Now',
    },

    {
      id: 4,
      duration: 'yearly',
      plans: [
        '15% ROI daily',
        'Min. Deposit: $1,500',
        'Max. Deposit: Unlimited',
        'Yearly Withdrawals',
        'Compound Interest',
        '10% Deposit Bonus',
        'AI Support',
        'Dedicated Account Manager',
      ],
      subscribe: 'Subscribe Now',
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen p-6">
      <div className="flex flex-row flex-wrap w-full gap-6 justify-center text-black">
        {SubscriptionsData.map((sub) => {
          return (
            <div
              className="py-8 px-3 relative shadow-xl border border-slate-300 rounded-lg flex flex-col gap-3 w-full md:w-fit"
              key={sub.id}
            >
              {sub.duration === 'weekly' ? (
                <div className="">
                  <span className="bg-spansubscriptioncolor px-3 w-fit absolute top-2 inset-x-0 translate-x-50 mx-auto text-sm">
                    Most Popular
                  </span>
                  <h2 className="text-center text-xl font-bold mb-2 mt-6 bg-slate-200 w-fit mx-auto px-6 py-1">
                    {sub.duration}
                  </h2>
                </div>
              ) : (
                <h2 className="text-center text-xl font-bold mb-2 mt-6 bg-slate-200 w-fit mx-auto px-6 py-1">
                  {sub.duration}
                </h2>
              )}

              <div className="flex flex-col gap-2 text-md">
                {sub.plans.map((plan, index) => {
                  return (
                    <div className="flex flex-row gap-3" key={index}>
                      {(sub.duration === 'daily' ||
                        sub.duration === 'weekly') &&
                      (index === 5 || index === 6) ? (
                        // Render a different icon for daily card, index 5
                        <>
                          <Image src={closecircle} alt="close icon" />
                          <div className="text-red-500">{plan}</div>
                        </>
                      ) : (
                        // Render the default icon for other cards
                        <>
                          <Image src={tickcircle} alt="tick box" />
                          <div>{plan}</div>
                        </>
                      )}
                    </div>
                  );
                })}

                {sub.subscribe === 'Active Plan' ? (
                  <button className="bg-activeplan text-white mt-3 py-3 rounded-lg">
                    {sub.subscribe}
                  </button>
                ) : (
                  <button className="bg-primaryPurple text-white mt-3 py-3 rounded-lg">
                    {sub.subscribe}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubscribedMap;
