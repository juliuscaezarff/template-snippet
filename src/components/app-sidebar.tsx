'use client'

import * as React from 'react'
import { GalleryVerticalEnd, AudioWaveform, Command } from 'lucide-react'
import { routes } from '@/lib/routes'
import { NavMain } from '@/components/nav-main'
import { NavSecondary } from '@/components/nav-secondary'
import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar'
import { TeamSwitcher } from './team-switcher'

const data = {
  user: {
    name: 'Julius Caezar',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg'
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props} collapsible='icon'>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams}/>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={routes.navMain} />
        <NavSecondary className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}