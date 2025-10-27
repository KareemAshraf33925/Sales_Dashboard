'use client';
import { useUser, UserProfile } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useEffect } from 'react';

export default function Profile() {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    if (!isSignedIn) {
      router.push(`/${locale}/sign-in`);
    }
  }, [isSignedIn, router, locale]);

  if (!isSignedIn) {
    // اختياري: render فارغ أو loading
    return <p>Redirecting...</p>;
  }

  return (
    <div className='flex justify-center items-center my-10'>
      <div className='h-1/3'>
        <UserProfile />
      </div>
    </div>
  );
}
