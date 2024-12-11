import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'

export default async function Page() {
  return (
    <div className="relative flex h-full w-full flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 z-10">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Agendamentos
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Seus Agendamentos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      {/* Background dots pattern */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] dark:opacity-40" />
      </div>

      {/* Main content */}
      <main className="relative z-1 flex-1 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="aspect-video rounded-xl bg-muted/50 border" />
          <div className="aspect-video rounded-xl bg-muted/50 border" />
          <div className="aspect-video rounded-xl bg-muted/50 border" />
          <div className="aspect-video rounded-xl bg-muted/50 border" />
          <div className="aspect-video rounded-xl bg-muted/50 border" />
          <div className="aspect-video rounded-xl bg-muted/50 border" />
        </div>
      </main>
    </div>
  )
}