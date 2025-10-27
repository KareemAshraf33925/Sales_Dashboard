import React from 'react'
import { UserCircle2Icon,HandCoinsIcon, ShoppingCartIcon, HeartIcon} from 'lucide-react'
import Reviews from './_components/Reviews'
import  Tabledata  from './_components/Tabledata'
import Orderoverview from './_components/Orderoverview'
import Builtdev from './_components/Builtdev'
import { Barcharts } from './_components/Barcharts'
import Radercharts from './_components/Radercharts'
import { useTranslations } from 'next-intl'
type InfocardProps={
  icon:React.ElementType
  title:string
  value:number
  percentage:string
  color:string
  iconColor:string
  bgColor:string
}
export default function Dashboard() {
  const t = useTranslations();
  const Infocard:InfocardProps[]=[{
    icon:UserCircle2Icon,
    title:t('dashboard.titleuser'),
    value:1600,
    percentage:"+55%",
    color:"bg-white",
    iconColor:"text-white",
    bgColor:"bg-[#0089e4]",   
  },
  {
    icon:HandCoinsIcon,
    title:t('dashboard.titleevent'),
    value:357,
    percentage:"+124%",
    color:"bg-white",
    iconColor:"text-white",
    bgColor:"bg-black",   
  },
  {
    icon:ShoppingCartIcon,
    title:t('dashboard.titlepurchases'),
    value:2300,
    percentage:"+15%",
    color:"bg-white",
    iconColor:"text-white",
    bgColor:"bg-black",   
  },
  {
    icon:HeartIcon,
    title:t('dashboard.titlelikes'),
    value:940,
    percentage:"+90%",
    color:"bg-white",
    iconColor:"text-white",
    bgColor:"bg-black",   
  },]
  return (
    <div className='px-5'>
    <div className='flex flex-row flex-wrap lg:flex-nowrap justify-start items-start gap-10 my-14 max-w-screen  '>
    <div className='grid grid-cols-1 md:grid-cols-2  gap-4 w-full lg:w-1/2  '>
     
      {Infocard.map((item,index)=>(
        <div key={index} className={`block rounded-md border border-gray-300 p-4  shadow-sm sm:p-6 
        ${item.bgColor}`}>
        <div className=" flex flex-col justify-center items-center gap-3">
         
      
          <div className="mt-4 sm:mt-0 flex flex-col justify-center items-center">
          <h3 className="mt-1 text-xl  text-white font-bold ">{item.value}</h3>
            <p className="text-lg font-semibold text-pretty  text-white ${item.color} font-bold">
            {item.title}
            </p>
            <div className="flex justify-center items-center gap-2 mt-5">
           
      
            <p className="mt-1  text-sm text-pretty  text-white font-bold ">
            {item.percentage}
            </p>
            </div>
          </div>
          <div className="sm:order-first sm:shrink-0 bg-white rounded-full w-16 h-16 flex justify-center items-center ">
           <item.icon className={`size-4 rounded-full  sm:size-[50px]  text-black `} />
          </div>
        </div>
      
       
      </div>
      
       
      ))}
      
    </div>
    <Reviews />
    </div>
    <div className='flex flex-col lg:flex-row justify-center  lg:justify-start items-start gap-5 my-14 max-w-screen'>
    <Tabledata/>
    <Orderoverview/>
    </div>
    <div className=' my-14'>
      <Builtdev/>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-2 justify-start items-start gap-3 my-14'>
      <Barcharts/>
      <Radercharts/>
    </div>
    </div>
  )
}
