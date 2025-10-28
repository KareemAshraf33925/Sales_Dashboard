import React from 'react'
import Visa from '../_components/Visa'
import Billinginformation from '../_components/Billinginformation'
import Transactions from '../_components/Transactions'

 
import { routing } from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
export default function Billing() {
  return (
    <div className='md:px-5'>

        <Visa/>
        <div className='grid grid-col-1 justify-center items-center md:grid-cols-5 md:justify-start md:items-start gap-3' >
            <Billinginformation/>
            <Transactions/>
        </div>
    </div>
  )
}
