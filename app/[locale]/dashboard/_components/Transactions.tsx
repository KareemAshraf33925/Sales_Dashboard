import { useTranslations } from 'next-intl'
import React from 'react'

export default function Transactions() {
    const t=useTranslations()
  return (
    <div className='shadow-xl p-3 lg:p-8 rounded-2xl my-2 md:col-span-2'>
        <div className='flex justify-between items-center'>
        <h2 className='md:text-md lg:text-xl font-bold'>{t("billing.Transactions")}</h2>
        <p className='text-gray-500'>23 - 30 March 2020</p>
        </div>
        <div className='mt-5'>
            <h3 className='text-lg text-gray-500'>{t("billing.Newest")}</h3>
            <div className='flex justify-between items-center mt-3'>
                <div className='flex justify-center items-center gap-3'>
                    <span className='w-7 h-7 rounded-full border border-red-500'></span>
                    <div className='flex flex-col gap-0.5'>
                    <h3 className='text-lg font-bold'>{t("billing.Netflix")}</h3>
                    <p className='text-gray-500'>27 March 2020, at 12:30 PM</p>
                    </div>
                </div>
                <p className='text-red-500 md:font-bold'>- $ 2,500 </p>
            </div>
            <div className='flex justify-between items-center mt-3'>
                <div className='flex justify-center items-center gap-3'>
                    <span className='w-7 h-7 rounded-full border border-green-400'></span>
                    <div className='flex flex-col gap-0.5'>
                    <h3 className='text-lg font-bold'>{t("billing.Apple")}</h3>
                    <p className='text-gray-500'>27 March 2020, at 04:30 AM</p>
                    </div>
                </div>
                <p className='text-red-500 font-bold'>+ $ 2,000 </p>
            </div>
        </div>
        <div className='mt-5'>
            <h3 className='text-lg text-gray-500'>{t("billing.Yesterday")}</h3>
            <div className='flex justify-between items-center mt-5'>
                <div className='flex justify-center items-center gap-3'>
                    <span className='w-7 h-7 rounded-full border border-green-400'></span>
                    <div className='flex flex-col gap-0.5'>
                    <h3 className='text-lg font-bold'>{t("billing.Stripe")}</h3>
                    <p className='text-gray-500'>26 March 2020, at 13:45 PM</p>
                    </div>
                </div>
                <p className='text-green-400 font-bold'>+ $ 750  </p>
            </div>
            <div className='flex justify-between items-center mt-5'>
                <div className='flex justify-center items-center gap-3'>
                    <span className='w-7 h-7 rounded-full border border-green-400'></span>
                    <div className='flex flex-col gap-0.5'>
                    <h3 className='text-lg font-bold'>{t("billing.HubSpot")}</h3>
                    <p className='text-gray-500'>26 March 2020, at 12:30 PM</p>
                    </div>
                </div>
                <p className='text-green-400 font-bold'>+ $ 1,000 </p>
            </div>
            <div className='flex justify-between items-center mt-5'>
                <div className='flex justify-center items-center gap-3'>
                    <span className='w-7 h-7 rounded-full border border-green-400'></span>
                    <div className='flex flex-col gap-0.5'>
                    <h3 className='text-lg font-bold'>{t("billing.CreativeTim")}</h3>
                    <p className='text-gray-500'>26 March 2020, at 08:30 AM</p>
                    </div>
                </div>
                <p className='text-green-400 font-bold'>+ $ 2,500  </p>
            </div>
            <div className='flex justify-between items-center mt-5'>
                <div className='flex justify-center items-center gap-3'>
                    <span className='w-7 h-7 rounded-full border border-black'></span>
                    <div className='flex flex-col gap-0.5'>
                    <h3 className='text-lg font-bold'>{t("billing.Webflow")}</h3>
                    <p className='text-gray-500'>26 March 2020, at 05:00 AM</p>
                    </div>
                </div>
                <p className='text-black font-bold'>{t("billing.Pending")}</p>
            </div>
        </div>
    </div>
  )
}
