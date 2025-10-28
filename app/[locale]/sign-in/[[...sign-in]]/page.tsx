
import { SignIn } from '@clerk/nextjs'
import {routing} from '@/i18n/routing';
 
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale,
    'sign-in': undefined, 
  }));
}
export default function Page() {

  return (<div className='flex justify-center items-center my-10'>

    <SignIn  />

  </div>) 
}