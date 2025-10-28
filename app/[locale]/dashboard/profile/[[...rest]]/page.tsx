
import { UserProfile } from '@clerk/nextjs';

import {routing} from '@/i18n/routing';
 
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale,
    'rest': undefined, 
  }));
}
export default function Profile() {


  return (
    <div className='flex justify-center items-center my-10'>
      <div className='h-1/3'>
        <UserProfile />
      </div>
    </div>
  );
}
