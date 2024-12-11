import { PropsWithChildren } from 'react'
import { auth } from '@/services/auth'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { SidebarInset } from '@/components/ui/sidebar'
import { redirect } from 'next/navigation'

export default async function Layout({ children }: PropsWithChildren) {
  const session = await auth()

  if(!session) {
    redirect('/auth')
  }

  return (
    <SidebarProvider>
      <AppSidebar user={session?.user} />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  )
}
