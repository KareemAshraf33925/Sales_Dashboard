import { useTranslations } from 'next-intl'
import React from 'react'

export default function Billinginformation() {
    const t=useTranslations()
  return (
    <div className='shadow-xl py-3 lg:p-8 rounded-2xl my-2 md:col-span-3'>
        <h2 className='text-xl md:text-2xl font-bold'>{t("billing.BillingInformation")}</h2>
        <div className='bg-gray-300 p-1.5 md:p-5 rounded-2xl mt-5'>
            <h3 className='text-xl'>{t("billing.OliverLiam")}</h3>
            <div className='flex justify-between items-start '>
                <div className='flex flex-col justify-start items-centers gap-1.5 w-full'>
                <p className='text-gray-400'>{t("billing.CompanyName")}:<span className='font-bold text-black'>{t("billing.VikingBurrito")}</span></p>
                <p className='text-gray-400'>{t("billing.EmailAddress")}:<span className='font-bold text-black'>oliver@burrito.com</span></p>
                <p className='text-gray-400'>{t("billing.VATNumber")}:<span className='font-bold text-black'>FRB1235476</span></p>
                </div>
                <div className='flex justify-between items-center gap-2.5'>
                    <p className='text-red-500 font-bold cursor-pointer'>{t("billing.Delete")}</p>
                    <p className='font-bold cursor-pointer'>{t("billing.Edit")}</p>
                </div>
            </div>
        </div>
        <div className='bg-gray-300 p-1.5 md:p-5 rounded-2xl mt-5'>
            <h3 className='text-xl'>{t("billing.LucasHarper")}</h3>
            <div className='flex justify-between items-start '>
                <div className='flex flex-col gap-1.5'>
                <p className='text-gray-400'>{t("billing.CompanyName")}:<span className='font-bold text-black'>{t("billing.StoneTechZone")}</span></p>
                <p className='text-gray-400'>{t("billing.EmailAddress")}:<span className='font-bold text-black'>lucas@stone-tech.com</span></p>
                <p className='text-gray-400'>{t("billing.VATNumber")}:<span className='font-bold text-black'>FRB1235476</span></p>
                </div>
                <div className='flex justify-between items-center gap-2.5'>
                    <p className='text-red-500 font-bold cursor-pointer'>{t("billing.Delete")}</p>
                    <p className='font-bold cursor-pointer'>{t("billing.Edit")}</p>
                </div>
            </div>
        </div>
        <div className='bg-gray-300 p-1.5 md:p-5 rounded-2xl mt-5'>
            <h3 className='text-xl'>{t("billing.EthanJames")}</h3>
            <div className='flex justify-between items-start '>
                <div className='flex flex-col gap-1.5'>
                <p className='text-gray-400'>{t("billing.CompanyName")}:<span className='font-bold text-black'>{t("billing.FiberNotion")}</span></p>
                <p className='text-gray-400'>{t("billing.EmailAddress")}:<span className='font-bold text-black'>ethan@fiber.com</span></p>
                <p className='text-gray-400'>{t("billing.VATNumber")}:<span className='font-bold text-black'>FRB1235476</span></p>
                </div>
                <div className='flex justify-between items-center gap-2.5'>
                    <p className='text-red-500 font-bold cursor-pointer'>{t("billing.Delete")}</p>
                    <p className='font-bold cursor-pointer'>{t("billing.Edit")}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
