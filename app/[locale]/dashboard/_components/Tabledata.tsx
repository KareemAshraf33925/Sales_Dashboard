"use client"
import * as React from "react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useTranslations } from 'next-intl'
export default function Tabledata() {
  const t = useTranslations();
  return (
    <div className="shadow-xl p-8 rounded-2xl w-full lg:w-1/2">
      <h1 className="text-sm md:text-xl font-bold">{t("dashboard.Projects")}</h1>
      <p className="text-gray-500 font-bold">{t("dashboard.donethismonth")}</p>
      <Table> 
  <TableHeader>
    <TableRow>
      <TableHead className="text-gray-500 font-bold" >{t("dashboard.Companies")}</TableHead>
      <TableHead className="text-gray-500 font-bold">{t("dashboard.Members")}</TableHead>
      <TableHead className="text-gray-500 font-bold">{t("dashboard.Budget")}</TableHead>
      <TableHead className="text-gray-500 font-bold">{t("dashboard.Completion")}</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-bold flex flex-row justify-start items-center gap-1.5">
        <img src={"/Sales_Dashboard/assets/adobe.png"} alt="adob xd" loading="lazy" className="w-12 h-12"/>
        {t("dashboard.SoftUIXDVersion")}
      </TableCell>
      
      <TableCell>
      <div className="flex ">
      <img src={"/Sales_Dashboard/assets/henyre.jpg"} alt="adob xd" loading="lazy" className="w-5 h-5 rounded-full"/>
      <img src={"/Sales_Dashboard/assets/mark.jpg"} alt="adob xd" loading="lazy" className="w-5 h-5 rounded-full"/>
      <img src={"/Sales_Dashboard/assets/dayana.jpg"} alt="adob xd" loading="lazy" className="w-5 h-5 rounded-full"/>
      <img src={"/Sales_Dashboard/assets/dayana1.jpg"} alt="adob xd" loading="lazy" className="w-5 h-5 rounded-full"/>
      </div>  
         </TableCell>
      <TableCell className="font-bold">$14,000 </TableCell>
      <TableCell >
     <p className='text-sm md:text-lg font-bold'>60%</p>
     <div className="mt-2 overflow-hidden rounded-full bg-gray-500">
       <div className="h-2 w-[60%] rounded-full bg-[#0089e4]"></div>
     </div>
    
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-bold flex flex-row justify-start items-center gap-4">
      <img src={"/Sales_Dashboard/assets/track.png"} alt="adob xd" loading="lazy" className="w-8 h-8"/>
      {t("dashboard.AddProgressTrack")}
</TableCell>
      <TableCell>
      <div className="flex">
      <img src={"/Sales_Dashboard/assets/henyre.jpg"} alt="adob xd" loading="lazy" className="w-5 h-5 rounded-full"/>
      <img src={"/Sales_Dashboard/assets/mark.jpg"} alt="adob xd" loading="lazy" className="w-5 h-5 rounded-full"/>
      </div> 
      </TableCell>
      <TableCell className="font-bold">$3,000 </TableCell>
      <TableCell >
      <p className='text-sm  md:text-lg font-bold'>10%</p>
     <div className="mt-2 overflow-hidden rounded-full bg-gray-500">
       <div className="h-2 w-[10%] rounded-full bg-[#0089e4]"></div>
     </div>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-bold flex flex-row justify-start items-center gap-4">
      <img src={"/Sales_Dashboard/assets/system-error.jpg"} alt="adob xd" loading="lazy" className="w-12 h-12"/>

      {t("dashboard.FixPlatformErrors")}
</TableCell>
      <TableCell>
      <div className="flex">
      <img src={"/Sales_Dashboard/assets/henyre.jpg"} alt="adob xd" loading="lazy" className="w-5 h-5 rounded-full"/>
      <img src={"/Sales_Dashboard/assets/dayana1.jpg"} alt="adob xd" loading="lazy" className="w-5 h-5 rounded-full"/>
      </div> 
      </TableCell>
      <TableCell className="font-bold">Not set </TableCell>
      <TableCell >
      <p className='text-sm  md:text-lg font-bold'>100%</p>
     <div className="mt-2 overflow-hidden rounded-full bg-gray-500">
       <div className="h-2 w-[100%] rounded-full bg-[#0089e4]"></div>
     </div>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-bold flex flex-row justify-start items-center gap-4">
      <img src={"/Sales_Dashboard/assets/lanch.png"} alt="adob xd" loading="lazy" className="w-10 h-10"/>
      {t("dashboard.LaunchourMobileApp")}
</TableCell>
      <TableCell>
      <div className="flex">
      <img src={"/Sales_Dashboard/assets/henyre.jpg"} alt="adob xd" loading="lazy" className="w-5 h-5 rounded-full"/>
      <img src={"/Sales_Dashboard/assets/mark.jpg"} alt="adob xd" loading="lazy" className="w-5 h-5 rounded-full"/>
      <img src={"/Sales_Dashboard/assets/dayana.jpg"} alt="adob xd" loading="lazy" className="w-5 h-5 rounded-full"/>
      <img src={"/Sales_Dashboard/assets/dayana1.jpg"} alt="adob xd" loading="lazy" className="w-5 h-5 rounded-full"/>
      </div> 
      </TableCell>
      <TableCell className="font-bold">$20,500  </TableCell>
      <TableCell >
      <p className='text-sm  md:text-lg font-bold'>100%</p>
     <div className="mt-2 overflow-hidden rounded-full bg-gray-500">
       <div className="h-2 w-[100%] rounded-full bg-[#0089e4]"></div>
     </div>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-bold flex flex-row justify-start items-center gap-4">
      <img src={"/Sales_Dashboard/assets/pricing.png"} alt="adob xd" loading="lazy" className="w-10 h-10"/>
      {t("dashboard.AddtheNewPricingPage")}
</TableCell>
      <TableCell>
      <div className="flex">
      <img src={"/Sales_Dashboard/assets/henyre.jpg"} alt="adob xd" loading="lazy" className="w-5 h-5 rounded-full"/>
      
      </div> 
      </TableCell>
      <TableCell className="font-bold">$500</TableCell>
      <TableCell >
      <p className='text-sm md:text-lg  font-bold'>25%</p>
     <div className="mt-2 overflow-hidden rounded-full bg-gray-500">
       <div className="h-2 w-[25%] rounded-full bg-[#0089e4]"></div>
     </div>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-bold flex flex-row justify-start items-center gap-4">
      <img src={"/Sales_Dashboard/assets/redesign.png"} alt="adob xd" loading="lazy" className="w-10 h-10"/>
      {t("dashboard.RedesignNewOnlineShop")}
      </TableCell>
      <TableCell>
      <div className="flex">
      <img src={"/Sales_Dashboard/assets/dayana.jpg"} alt="adob xd" loading="lazy" className="w-5 h-5 rounded-full"/>
      <img src={"/Sales_Dashboard/assets/dayana1.jpg"} alt="adob xd" loading="lazy" className="w-5 h-5 rounded-full"/>
      </div> 
      </TableCell>
      <TableCell className="font-bold">$2,000 </TableCell>
      <TableCell >
      <p className='text-sm md:text-lg font-bold'>40%</p>
     <div className="mt-2 overflow-hidden rounded-full bg-gray-500">
       <div className="h-2 w-[40%] rounded-full bg-[#0089e4]"></div>
     </div>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>

    </div>
  )
}


