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
import { useTranslations } from "next-intl";

export default function Authorstable() {
  const t = useTranslations();
  return (
    <div className="shadow-xl p-8 rounded-2xl ">
    <h1 className="text-xl font-bold">{t("tables.Authorstable")}</h1>
   
    <Table> 
<TableHeader>
  <TableRow>
    <TableHead className="text-gray-500 font-bold" >{t("tables.Author")}</TableHead>
    <TableHead className="text-gray-500 font-bold">{t("tables.Function")}</TableHead>
    <TableHead className="text-gray-500 font-bold">{t("tables.Status")}</TableHead>
    <TableHead className="text-gray-500 font-bold">{t("tables.Employed")}</TableHead>
    
  </TableRow>
</TableHeader>
<TableBody>

  
<TableRow>
    <TableCell className="font-bold flex flex-row justify-start items-center gap-4">
    <img src={"/assets/mark.jpg"} alt="John Michael" loading="lazy" className="w-10 h-10 rounded-2xl"/>
    <div className="flex flex-col gap-0.5">
        <h5 className="text-md text-bold text-gray-500 ">{t("tables.JohnMichael")}</h5>
        <p className="text-gray-500">john@creative-tim.com</p>
    </div>
    
    </TableCell>
    <TableCell>
    <div className="flex flex-col gap-0.5">
    <h5 className="text-md text-bold text-gray-500 ">{t("tables.Manager")}</h5>
    <p className="text-gray-500">{t("tables.Organization")}</p>
    </div> 
    </TableCell>
    <TableCell className="font-semibold">
    <span className=" bg-gradient-to-r from-green-300 to-green-500 rounded-2xl  block text-white
    text-center">{t("tables.Online")}</span>
        
    </TableCell>
    <TableCell className="text-bold text-gray-500" >
    23/04/18
    </TableCell>
    <TableCell className="text-bold text-gray-500 cursor-pointer">{t("tables.Edit")}</TableCell>
  </TableRow>

  <TableRow>
    <TableCell className="font-bold flex flex-row justify-start items-center gap-4">
    <img src={"/assets/henyre.jpg"} alt="Alexa Liras" loading="lazy" className="w-10 h-10 rounded-2xl"/>
    <div className="flex flex-col gap-0.5">
        <h5 className="text-md text-bold text-gray-500 ">{t("tables.AlexaLiras")}</h5>
        <p className="text-gray-500">alexa@creative-tim.com</p>
    </div>
    
    </TableCell>
    <TableCell>
    <div className="flex flex-col gap-0.5">
    <h5 className="text-md text-bold text-gray-500 ">{t("tables.Programtor")}</h5>
    <p className="text-gray-500">{t("tables.Developer")}</p>
    </div> 
    </TableCell>
    <TableCell className="font-semibold">
    <span className=" bg-gradient-to-r from-gray-400 to-gray-500 rounded-2xl  block text-white
    text-center">{t("tables.Offline")}</span>
        
    </TableCell>
    <TableCell className="text-bold text-gray-500" >
    11/01/19
    </TableCell>
    <TableCell className="text-bold text-gray-500 cursor-pointer">{t("tables.Edit")}</TableCell>
  </TableRow>
  <TableRow>
    <TableCell className="font-bold flex flex-row justify-start items-center gap-4">
    <img src={"/assets/mark.jpg"} alt=" Laurent Perrier" loading="lazy" className="w-10 h-10 rounded-2xl"/>
    <div className="flex flex-col gap-0.5">
        <h5 className="text-md text-bold text-gray-500 ">
        {t("tables.LaurentPerrier")}</h5>
        <p className="text-gray-500">laurent@creative-tim.com</p>
    </div>
    
    </TableCell>
    <TableCell>
    <div className="flex flex-col gap-0.5">
    <h5 className="text-md text-bold text-gray-500 ">{t("tables.Executive")}</h5>
    <p className="text-gray-500">{t("tables.Projects")}</p>
    </div> 
    </TableCell>
    <TableCell className="font-semibold">
    <span className=" bg-gradient-to-r from-green-300 to-green-500 rounded-2xl  block text-white
    text-center">{t("tables.Online")}</span>
        
    </TableCell>
    <TableCell className="text-bold text-gray-500" >
    19/09/17
    </TableCell>
    <TableCell className="text-bold text-gray-500 cursor-pointer">{t("tables.Edit")}</TableCell>
  </TableRow>
  <TableRow>
    <TableCell className="font-bold flex flex-row justify-start items-center gap-4">
    <img src={"/assets/henyre.jpg"} alt="Michael Levi" loading="lazy" className="w-10 h-10 rounded-2xl"/>
    <div className="flex flex-col gap-0.5">
        <h5 className="text-md text-bold text-gray-500 ">
        {t("tables.MichaelLevi")}</h5>
        <p className="text-gray-500">michael@creative-tim.com</p>
    </div>
    
    </TableCell>
    <TableCell>
    <div className="flex flex-col gap-0.5">
    <h5 className="text-md text-bold text-gray-500 "> {t("tables.Programtor")}</h5>
    <p className="text-gray-500">{t("tables.Developer")}</p>
    </div> 
    </TableCell>
    <TableCell className="font-semibold">
    <span className=" bg-gradient-to-r from-green-300 to-green-500 rounded-2xl  block text-white
    text-center">{t("tables.Offline")}</span>
        
    </TableCell>
    <TableCell className="text-bold text-gray-500" >
    14/09/20
    </TableCell>
    <TableCell className="text-bold text-gray-500 cursor-pointer">{t("tables.Edit")}</TableCell>
  </TableRow>

  <TableRow>
    <TableCell className="font-bold flex flex-row justify-start items-center gap-4">
    <img src={"/assets/mark.jpg"} alt="Richard Gran" loading="lazy" className="w-10 h-10 rounded-2xl"/>
    <div className="flex flex-col gap-0.5">
        <h5 className="text-md text-bold text-gray-500 ">
      {t("tables.RichardGran")}</h5>
        <p className="text-gray-500">richard@creative-tim.com</p>
    </div>
    
    </TableCell>
    <TableCell>
    <div className="flex flex-col gap-0.5">
    <h5 className="text-md text-bold text-gray-500 ">{t("tables.Manager")}</h5>
    <p className="text-gray-500">{t("tables.Executive")}</p>
    </div> 
    </TableCell>
    <TableCell className="font-semibold">
    <span className=" bg-gradient-to-r from-gray-400 to-gray-500 rounded-2xl  block text-white
    text-center">{t("tables.Offline")}</span>
        
    </TableCell>
    <TableCell className="text-bold text-gray-500" >
    04/10/21
    </TableCell>
    <TableCell className="text-bold text-gray-500 cursor-pointer">{t("tables.Edit")}</TableCell>
  </TableRow>
</TableBody>
</Table>

  </div>
  )
}
