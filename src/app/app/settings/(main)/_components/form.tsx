'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { updateProfile } from '../actions'
import { updateProfileSchema } from '../schemas'
import { toast } from '@/components/ui/use-toast'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { SheetFooter } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Session } from 'next-auth'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'

type ProfileFormProps = {
  defaultValues: Session['user']
}

export function ProfileForm({ defaultValues }: ProfileFormProps) {
  const router = useRouter()

  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: defaultValues?.name ?? '',
      email: defaultValues?.email ?? '',
    },
  })

  const onSubmit = form.handleSubmit(async (data) => {
    await updateProfile(data)
    router.refresh()

    toast({
      title: 'Sucesso',
      description: 'Seu perfil foi atualizado com sucesso.',
    })
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-8">
      <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold">Nome</CardTitle>
            <CardDescription>
              Este será o nome exibido publicamente.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <Separator className="mb-6" />

          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Máximo de 20 caracteres
              </p>
              <Button disabled={form.formState.isLoading} type="submit" size='sm'>
                {form.formState.isSubmitting
                  ? 'Salvando...'
                  : 'Salvar alterações'}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold">Email</CardTitle>
            <CardDescription>
              Entre em contato pelo email contact@micro-saas.com para alterar o
              email.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu email" readOnly {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card className="border border-red-500">
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2">
              <CardTitle className="text-base font-semibold">
                Deletar Conta
              </CardTitle>
            </div>
            <CardDescription>
              Permanentemente delete sua conta e todos os dados associados. Esta
              ação não pode ser desfeita - por favor, proceda com cautela.
            </CardDescription>
          </CardHeader>
          <Separator className="mb-4" />
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-end">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      size="sm"
                      variant="destructive"
                      className="bg-red-500 hover:bg-red-600 transition-colors w-full sm:w-auto"
                    >
                      Deletar Conta
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Tem certeza que deseja deletar sua conta?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Esta ação é irreversível. Todos os seus dados serão
                        permanentemente removidos dos nossos servidores.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction
                        // onClick={handleDeleteAccount}
                        className="bg-red-500 text-white hover:bg-red-600 transition-colors"
                      >
                        Sim, deletar minha conta
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* <SheetFooter className="mt-auto">
          <Button disabled={form.formState.isLoading} type="submit" size='sm'>
            {form.formState.isSubmitting && 'Salvando...'}
            {!form.formState.isSubmitting && 'Salvar alterações'}
          </Button>
        </SheetFooter> */}
      </form>
    </Form>
  )
}
