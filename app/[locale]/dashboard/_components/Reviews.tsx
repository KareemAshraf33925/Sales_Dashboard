import { Button } from '@/components/ui/button';
import React from 'react'
import { useTranslations } from 'next-intl'
type propsReview={
       title:string;
        persent:string;
        range:string;
    }[]
export default function Reviews() {
  const t = useTranslations();
    const review:propsReview=[{
        title:t("dashboard.PositiveReviews"),
        persent:"80%",
        range:"w-2/3"
    },{
      title:t("dashboard.NeutralReviews"),
    persent:"17%",
    range:"w-1/4"
},{
  title:t("dashboard.NegativeReviews"),
    persent:"3%",
    range:"w-1/6"
}]
  return (
    <div className=' shadow-2xl p-3 rounded-2xl w-full lg:w-1/2 '>

        <h2 className='text-2xl font-bold'>{t("dashboard.Reviews")}</h2>
  {review.map((reve,index)=>(
    <div key={index} className='my-5'>
     <div className='flex justify-between items-center'>
     <p className="text-xs font-medium text-gray-500">{reve.title}</p>
     <p className='text-xl font-bold'>{reve.persent}</p>
     </div>
     <div className="mt-4 overflow-hidden rounded-full bg-gray-200">
       <div className={`h-2 ${reve.range} rounded-full bg-[#0089e4]`}></div>
     </div>
     </div>
  ))}
   <div className='flex justify-between flex-wrap items-center py-7 gap-3
    md:flex-nowrap'>
    <p className="text-xs font-bold text-gray-500">{t("dashboard.morethan")}</p>
    <Button>{t("dashboard.Viewallreview")}</Button>
   </div>
  
</div>

    
  )
}
