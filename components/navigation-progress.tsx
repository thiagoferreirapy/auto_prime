'use client';

import { Suspense, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(false);
  }, [pathname, searchParams]);

  useEffect(() => {
    let timeout: number;
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target as HTMLElement;
      const link = target.closest('a[href]') as HTMLAnchorElement | null;
      if (!link || link.target || link.hasAttribute('download')) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.hash && url.pathname === window.location.pathname && url.search === window.location.search) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;
      setPending(true);
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => setPending(false), 10000);
    };
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
      window.clearTimeout(timeout);
    };
  }, []);

  if (!pending) return null;
  return <div role="progressbar" aria-label="Carregando página" className="fixed inset-x-0 top-0 z-[100] h-1 overflow-hidden bg-brand-soft"><div className="h-full w-1/3 animate-[navigation-progress_1.2s_ease-in-out_infinite] bg-brand" /></div>;
}

export function NavigationProgress() {
  return <Suspense fallback={null}><ProgressBar /></Suspense>;
}
