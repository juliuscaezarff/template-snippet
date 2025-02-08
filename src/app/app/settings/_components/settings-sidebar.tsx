'use client'

import {
  DashboardSidebarNav,
  DashboardSidebarNavLink,
  DashboardSidebarNavMain,
} from '@/components/dashboard/sidebar'
import { routes } from '@/lib/routes'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

interface SettingsSidebarProps {
  className?: string
}

export function SettingsSidebar({className}: SettingsSidebarProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <DashboardSidebarNav className={cn("flex-1", className)}>
    <DashboardSidebarNavMain className="flex flex-row gap-2">
      {routes.navSettings.map((route) => (
        <DashboardSidebarNavLink
          key={route.url}
          href={route.url}
          active={isActive(route.url)}
          className="flex-none"
        >
          {route.title}
        </DashboardSidebarNavLink>
      ))}
    </DashboardSidebarNavMain>
  </DashboardSidebarNav>
  )
}
