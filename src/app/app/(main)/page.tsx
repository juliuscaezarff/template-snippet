import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { getUserTodos } from './actions'
import { TodoDataTable } from './_components/todo-data-table'
import { Button } from '@/components/ui/button'
import { TodoUpsertSheet } from './_components/todo-upsert-sheet'
import { PlusIcon } from 'lucide-react'
import { Notifications } from '@/components/ui/notification'
import { FeedbackForm } from '@/components/ui/feedback-form'

export default async function Page() {
  const todos = await getUserTodos()

  return (
    <div className="relative flex h-full w-full flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 z-10 border-b">
        <div className="flex w-full items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbPage className="text-muted-foreground">
                    Agendamentos
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-2">
            <FeedbackForm />
            <Notifications />
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto">
        <div className="container mx-auto max-w-6xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Services</h1>
              <p className="text-muted-foreground mt-1">
                Manage each application that publish or consume events.
              </p>
            </div>
            <TodoUpsertSheet>
              <Button size="sm">
                <PlusIcon className="w-4 h-4" />
                Add todo
              </Button>
            </TodoUpsertSheet>
          </div>

          <Separator className="my-6" />

          <TodoDataTable data={todos} />
        </div>
      </main>
    </div>
  )
}
