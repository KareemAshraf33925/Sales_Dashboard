import React from 'react'
import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
export default function Switcherlanguage() {
    const locale=useLocale();
    const pathname=usePathname()
    const newLocale=locale === "ar"?"en":'ar';
    let newPathname;
    if(/^\/(en|ar)/.test(pathname)){
        newPathname=pathname.replace(/^\/(en|ar)/,`/${newLocale}`)
    }else{
          newPathname=`/${newLocale}${pathname}`
    }
  return (
    
        <Link href={newPathname} className="font-bold p-2 rounded-lg hover:bg-[#0089e494]">
        {locale === "ar"?"English":"العربيه"}
        </Link>
    
  )
}
