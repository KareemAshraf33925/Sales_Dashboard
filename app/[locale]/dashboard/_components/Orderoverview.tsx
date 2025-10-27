"use client"
import React from 'react'
import { useTranslations } from 'next-intl'
export default function Orderoverview() {
    const t = useTranslations();
  return (
    <div className='shadow-xl p-8 rounded-2xl my-2 w-full lg:w-1/2'>
        <h2 className='text-lg font-bold'>{t("dashboard.OrderOverview")}</h2>
        <p className='text-gray-500'>{t("dashboard.thismonth")}</p>
        <div className='flex flex-col justify-start items-start gap-2.5 mt-4'>
        <div className='flex justify-center items-center gap-5  '>
            <img src="/Sales_Dashboard/assets/jars.svg" alt="jars" className='w-8 h-8' />
          
            <div>
                <h3 className='font-semibold  text-md'>{t("dashboard.Designchanges")}</h3>
                <p className='text-gray-500 '>22 DEC 7:20 PM</p>
            </div>
        </div>
        <div className='flex justify-center items-center gap-5 '>
            <img src="/Sales_Dashboard/assets/html.png" alt="html" className='w-8 h-8' />
            <div>
                <h3 className='font-semibold text-md'>{t("dashboard.Neworder")}</h3>
                <p className='text-gray-500 '>21 DEC 11 PM</p>
            </div>
            </div>
            <div className='flex justify-center items-center gap-5 '>
            <img src="/Sales_Dashboard/assets/basket.png" alt="basket" className='w-8 h-8' />
            <div>
                <h3 className='font-semibold text-md'>{t("dashboard.ServerpaymentsforApril")}</h3>
                <p className='text-gray-500 '>21 DEC 9:34 PM</p>
            </div>
            </div>
            <div className='flex justify-center items-center gap-5 '>
            <img src="/Sales_Dashboard/assets/card.png" alt="card" className='w-8 h-8' />
            <div>
                <h3 className='font-semibold text-md'>{t("dashboard.Newcardaddedfororder")}</h3>
                <p className='text-gray-500 '>20 DEC 2:20 AM</p>
            </div>
            </div>
            <div className='flex justify-center items-center gap-5 '>
            <img src="/Sales_Dashboard/assets/key.png" alt="key" className='w-8 h-8' />
            <div>
                <h3 className='font-semibold text-md'>{t("dashboard.Unlockpackagesfordevelopment")}</h3>
                <p className='text-gray-500 '>18 DEC 4:54 AM</p>
            </div>
            </div>
            <div className='flex justify-center items-center gap-5 '>
            <img src="/Sales_Dashboard/assets/order.png" alt="order" className='w-8 h-8' />
            <div>
                <h3 className='font-semibold text-md'>{t("dashboard.Neworder#9")}</h3>
                <p className='text-gray-500 '>17 DEC</p>
            </div>
            </div>
            </div>
    </div>
  )
}
