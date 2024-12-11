'use client'

import {
  DashboardSidebarNav,
  DashboardSidebarNavLink,
  DashboardSidebarNavMain,
} from '@/components/dashboard/sidebar'
import { routes } from '@/lib/routes'
import { usePathname } from 'next/navigation'

export function SettingsSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <aside>
      <DashboardSidebarNav>
        <DashboardSidebarNavMain>
          {routes.navSettings.map((route) => (
            <DashboardSidebarNavLink
              key={route.url}
              href={route.url}
              active={isActive(route.url)}
            >
              {route.title}
            </DashboardSidebarNavLink>
          ))}
        </DashboardSidebarNavMain>
      </DashboardSidebarNav>
    </aside>
  )
}
