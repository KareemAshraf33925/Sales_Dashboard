"use client"
import React from 'react'
import { useTranslations } from 'next-intl'
export default function Builtdev() {
  const t = useTranslations();
  return (
    <div className='flex justify-start flex-col lg:flex-row flex-wrap lg:flex-nowrap items-start gap-3'>
        {/* built developers */}
        <div className="flex flex-col md:flex-row justify-start items-center gap-5 shadow-2xl px-8 pb-20 pt-5  rounded-2xl w-full lg:w-1/2">
 
  <div className='flex flex-col justify-between items-start gap-8'>
  <div>
    <p className='text-gray-500 font-semibold'>{t("dashboard.Builtbydevelopers")}</p>
  <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">{t("dashboard.SoftUIDashboard")}</h3>

  <p className="mt-2 max-w-sm text-gray-700">
  {t("dashboard.Fromcolors")}
  </p>
  </div>
  <p className='cursor-pointer text-gray-500 font-semibold'> {t("dashboard.ReadMore")}</p>
  </div>
  <img
    alt="rocket"
    src="/Sales_Dashboard/assets/rocket.jpg"
    className="h-48 w-48 rounded-2xl "
  />
</div>
        {/* end */}
        {/* work with rocket */}
        <div className='pb-14 pt-5 px-5 shadow-2xl rounded-2xl  w-full lg:w-1/2 relative'>
        <div className="flex justify-start items-center gap-5 px-3 py-2  ">
 
 <div className='flex flex-col justify-between items-start gap-8 z-30'>
 <div>
   <p className='text-white font-semibold'>{t("dashboard.Workwiththerockets")}</p>
 <h3 className="mt-4 text-lg font-bold text-white sm:text-xl">{t("dashboard.SoftUDashboard")}</h3>

 <p className="mt-2 max-w-sm text-white">
 {t("dashboard.Wealthcreation")}
 </p>
 </div>
 <p className='cursor-pointer text-white font-semibold'>{t("dashboard.ReadMore")}</p>
 </div>

</div>
<img
   alt="laptop"
   src="/Sales_Dashboard/assets/laptop.jpg"
   className=" absolute  inset-0 top-0 bottom-0   rounded-2xl z-0  w-full "
 />
</div>
        {/* end */}
    </div>
  )
}
