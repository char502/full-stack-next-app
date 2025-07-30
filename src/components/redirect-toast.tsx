'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { consumeCookiedByKey } from '@/actions/cookies';

const RedirectToast = () => {
  // need this effect to run every time the path changes
  // because now it is being used in layout.tsx which
  // doesn't automatically render on path change
  const pathname = usePathname();
  useEffect(() => {
    const showCookieToast = async () => {
      const message = await consumeCookiedByKey('toast');

      if (message) {
        toast.success(message);
      }
    };
    showCookieToast();
  }, [pathname]);

  return null;
};

export { RedirectToast };
