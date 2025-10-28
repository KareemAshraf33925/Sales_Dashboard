import React from 'react'
import Authorstable from '../_components/Authorstable'
import Projectatable from '../_components/Projectatable'
import { routing } from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
export default function Tables() {
  return (
    <div className='px-5'>
      <Authorstable/>
      <Projectatable/>
    </div>
  )
}
