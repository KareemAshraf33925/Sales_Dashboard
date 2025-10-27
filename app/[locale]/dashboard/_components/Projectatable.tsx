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
import { useTranslations } from "next-intl"
export default function Projectatable() {
  const t=useTranslations();
  return (
    <div className="shadow-xl p-8 rounded-2xl my-16">
      <h1 className="text-xl font-bold">{t("tables.Projectstable")}</h1>
      
      <Table> 
  <TableHeader>
    <TableRow>
      <TableHead className="text-gray-500 font-bold" >{t("tables.Project")}</TableHead>
      <TableHead className="text-gray-500 font-bold">{t("tables.Budget")}</TableHead>
      <TableHead className="text-gray-500 font-bold">{t("tables.Status")}</TableHead>
      <TableHead className="text-gray-500 font-bold">{t("tables.Completion")}</TableHead>
      <TableHead></TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-bold flex flex-row justify-start items-center gap-1.5">
        <img src={"/Sales_Dashboard/assets/Spotify.svg"} alt="Spotify" loading="lazy" className="w-12 h-12"/>
        {t("tables.Spotify")}
      </TableCell>
      
      <TableCell className="font-bold">
     $2,500
         </TableCell>
      <TableCell className="font-bold">{t("tables.working")}</TableCell>
      <TableCell >
     <p className='text-lg font-bold'>60%</p>
     <div className="mt-2 overflow-hidden rounded-full bg-gray-500">
       <div className="h-2 w-[60%] rounded-full bg-[#0089e4]"></div>
     </div>
    
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-bold flex flex-row justify-start items-center gap-4">
      <img src={"/Sales_Dashboard/assets/invisionl.png"} alt="Invision" loading="lazy" className="w-8 h-8"/>
      {t("tables.Invision")}
</TableCell>
      <TableCell className="font-bold">
       $5,000
      </TableCell>
      <TableCell className="font-bold">{t("tables.done")}</TableCell>
      <TableCell >
      <p className='text-lg font-bold'>100%</p>
     <div className="mt-2 overflow-hidden rounded-full bg-gray-500">
       <div className="h-2 w-[100%] rounded-full bg-[#0089e4]"></div>
     </div>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-bold flex flex-row justify-start items-center gap-4">
      <img src={"/Sales_Dashboard/assets/Jira.png"} alt="Jira" loading="lazy" className="w-12 h-12"/>

      {t("tables.Jira")}
</TableCell>
      <TableCell className="font-bold">
      $3,400
      </TableCell>
      <TableCell className="font-bold">{t("tables.canceled")}</TableCell>
      <TableCell >
      <p className='text-lg font-bold'>30%</p>
     <div className="mt-2 overflow-hidden rounded-full bg-gray-500">
       <div className="h-2 w-[30%] rounded-full bg-[#e40013]"></div>
     </div>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-bold flex flex-row justify-start items-center gap-4">
      <img src={"/Sales_Dashboard/assets/slack.png"} alt="Slack" loading="lazy" className="w-10 h-10"/>
      {t("tables.Slack")}
</TableCell>
      <TableCell className="font-bold">
      $1,000
      </TableCell>
      <TableCell className="font-bold">{t("tables.canceled")}</TableCell>
      <TableCell >
      <p className='text-lg font-bold'>0%</p>
     <div className="mt-2 overflow-hidden rounded-full bg-gray-500">
       <div className="h-2 w-[0%] rounded-full bg-[#0089e4]"></div>
     </div>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-bold flex flex-row justify-start items-center gap-4">
      <img src={"/Sales_Dashboard/assets/Webdev.png"} alt="Webdev" loading="lazy" className="w-10 h-10"/>
      {t("tables.Webdev")}
</TableCell>
      <TableCell className="font-bold">
      $14,000
      </TableCell>
      <TableCell className="font-bold">{t("tables.working")}</TableCell>
      <TableCell >
      <p className='text-lg font-bold'>80%</p>
     <div className="mt-2 overflow-hidden rounded-full bg-gray-500">
       <div className="h-2 w-[80%] rounded-full bg-[#0089e4]"></div>
     </div>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-bold flex flex-row justify-start items-center gap-4">
      <img src={"/Sales_Dashboard/assets/adobe.png"} alt="adob xd" loading="lazy" className="w-10 h-10"/>
      {t("tables.Adobe")}
      </TableCell>
      <TableCell  className="font-bold">
      $2,300
      </TableCell>
      <TableCell className="font-bold">{t("tables.done")}</TableCell>
      <TableCell >
      <p className='text-lg font-bold'>100%</p>
     <div className="mt-2 overflow-hidden rounded-full bg-gray-500">
       <div className="h-2 w-[100%] rounded-full bg-[#0089e4]"></div>
     </div>
      </TableCell>
      <TableCell></TableCell>
    </TableRow>
  </TableBody>
</Table>

    </div>
  )
}
