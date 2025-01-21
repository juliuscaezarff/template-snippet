import * as React from 'react'

import { SidebarGroup, SidebarGroupContent } from '@/components/ui/sidebar'
import { News, NewsArticle } from './ui/sidebar-news'

const DEMO_ARTICLES: NewsArticle[] = [
  {
    href: 'https://dub.co/changelog/regions-support',
    title: 'Regions support in analytics',
    summary: 'You can now filter your analytics by regions',
    image: '/bg-gradient.jpeg'
  },
  {
    href: 'https://dub.co/blog/soc2',
    title: 'Dub is now SOC 2 Type II Compliant',
    summary:
      "We're excited to announce that Dub has successfully completed a SOC 2 Type II audit to further demonstrate our commitment to security.",
    image: '/bg-gradient.jpeg'
  },
  {
    href: 'https://dub.co/changelog/utm-templates',
    title: 'UTM Templates',
    summary:
      'You can now create UTM templates to streamline UTM campaign management across your team.',
    image: '/bg-gradient.jpeg'
  }
]

export function NavSecondary({
  ...props
}: React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <News articles={DEMO_ARTICLES} />
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
