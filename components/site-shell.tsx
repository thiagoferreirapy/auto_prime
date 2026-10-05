'use client';

import { usePathname } from 'next/navigation';
import { MobileBottomNav } from './mobile-bottom-nav';
import { SiteFooter } from './site-footer';
import { SiteHeader } from './site-header';
import { NavigationProgress } from './navigation-progress';

export function SiteShell({ children }: { children: React.ReactNode }) {
  const isAdmin = usePathname().startsWith('/admin');

  if (isAdmin) return <main className="min-h-screen">{children}</main>;

  return <div className="min-h-screen pb-[calc(61px+max(0.5rem,env(safe-area-inset-bottom)))] lg:pb-0"><NavigationProgress /><SiteHeader /><main>{children}</main><SiteFooter /><MobileBottomNav /></div>;
}
