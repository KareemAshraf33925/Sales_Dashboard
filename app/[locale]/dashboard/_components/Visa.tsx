"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
export default function Visa() {
    const t=useTranslations()
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-10'>
    <div className='shadow-2xl rounded-2xl p-5 col-span-2'>
        {/* start-card */}
    <div className='flex justidy-center items-center flex-col md:flex-row md:justify-start md:items-center gap-3'>
{/* start card visa */}
<div className=" md:px-3  relative w-80 h-80">
 <img
   alt="card visa"
   src="/assets/card-classic.webp"
   className=" absolute inset-0 top-0 bottom-0 rounded-2xl z-0 w-full h-full object-cover"
 />
</div>
{/* end */}
<div className='shadow-2xl flex flex-col justify-center items-center gap-2.5 p-5 rounded-2xl'>
    <div className='w-18 h-14 bg-orange-500 rounded-xl'></div>
    <h2 className='text-3xl'>{t("billing.Salary")}</h2>
    <p className='text-center'>{t("billing.BelongInteractive")}</p>
    <h5 className='text-xl lg:text-2xl border-t'>+$2000</h5>
</div>
<div className='shadow-2xl flex flex-col justify-center items-center gap-2.5 p-5 rounded-2xl'>
    <div className='w-18 h-14 bg-orange-500 rounded-xl'></div>
    <h2 className='text-3xl'>{t("billing.Paypal")}</h2>
    <p className='text-center'>{t("billing.FreelancePayment")}</p>
    <h5 className='text-xl lg:text-2xl border-t'>$455.00</h5>
</div>
    </div>
    {/* end */}
    {/* start-payment method */}
    <div>
        <div className='flex mt-5 justify-centers items-center flex-col  md:flex-row  gap-5  md:justify-between md:items-center'>
            <h2 className='md:text-md lg:text-xl font-bold'>{t("billing.PaymentMethod")}</h2>
            <Button className='font-bold cursor-pointer'>{t("billing.AddNewCard")}</Button>
        </div>
        <div className='flex flex-col md:flex-row  justify-center items-center gap-5 md:justify-between md:items-center py-5'>
            <div className='border  gap-3 w-46 h-16 md:w-50 md:h-16 lg:w-72 lg:h-16  rounded-2xl flex justify-center items-center md:gap-5 lg:gap-8 px-10'>
                <img src="/assets/mastercard.png" alt="mastercard" className='w-5 h-5 ' />
                <p className='font-bold text-gray-500'>**** </p>
                <p className='font-bold text-gray-500'>**** </p>
                <p className='font-bold text-gray-500'>7852</p>
            </div>
            <div className='border gap-3 w-46 h-16 md:w-50 md:h-16 lg:w-72 lg:h-16 rounded-2xl flex justify-center items-center  md:gap-5 lg:gap-8 px-10'>
                <img src="/assets/visa.png" alt="visa" className='w-5 h-5 ' />
                <p className='font-bold text-gray-500'>**** </p>
                <p className='font-bold text-gray-500'>**** </p>
                <p className='font-bold text-gray-500'>5248</p>
            </div>
        </div>
    </div>
    {/* end */}
    </div>
    <div className='shadow-2xl rounded-2xl p-5 col-span-1'>
        <div className='flex justify-between items-center'>
            <h2 className='text-xl lg:text-2xl font-bold'>{t("billing.Invoices")} </h2>
            <Button className='font-bold cursor-pointer'>{t("billing.ViewAll")}</Button>
        </div>
        <div className='flex justify-between items-center mt-8'>
            <div>
                <h3 className='text-md font-semibold'>{t("billing.March")}, 01, 2020</h3>
                <p className='text-gray-500'>#MS-415646</p>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <h3 className='text-lg text-gray-500'>$180 </h3>
                <p className='cursor-pointer text-xl font-semibold'>Pdf</p>
            </div>
        </div>
        <div className='flex justify-between items-center mt-8'>
            <div>
                <h3 className='text-md font-semibold'>{t("billing.February")}, 10, 2021</h3>
                <p className='text-gray-500'>#RV-126749</p>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <h3 className='text-lg text-gray-500'>$250  </h3>
                <p className='cursor-pointer text-xl font-semibold'>Pdf</p>
            </div>
        </div>
        <div className='flex justify-between items-center mt-8'>
            <div>
                <h3 className='text-md font-semibold'>{t("billing.April")}, 05, 2020</h3>
                <p className='text-gray-500'>#FB-212562</p>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <h3 className='text-lg text-gray-500'>$560  </h3>
                <p className='cursor-pointer text-xl font-semibold'>Pdf</p>
            </div>
        </div>
        <div className='flex justify-between items-center mt-8'>
            <div>
                <h3 className='text-md font-semibold'>{t("billing.June")}, 25, 2019</h3>
                <p className='text-gray-500'>#QW-103578</p>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <h3 className='text-lg text-gray-500'>$120  </h3>
                <p className='cursor-pointer text-xl font-semibold'>Pdf</p>
            </div>
        </div>
        <div className='flex justify-between items-center mt-8'>
            <div>
                <h3 className='text-md font-semibold'>{t("billing.March")}, 01, 2019</h3>
                <p className='text-gray-500'>#AR-803481</p>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <h3 className='text-lg text-gray-500'>$300  </h3>
                <p className='cursor-pointer text-xl font-semibold'>Pdf</p>
            </div>
        </div>
    </div>
    </div>
  )
}
