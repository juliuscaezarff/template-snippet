'use client'

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { ReloadIcon } from '@radix-ui/react-icons'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export function AuthForm() {
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn('nodemailer', { email: data.email, redirect: false })

      toast({
        title: 'Magic Link Sent',
        description: 'Check your email for the magic link to login'
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred. Please try again.'
      })
    }
  })

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true)
      const result = await signIn('google', {
        callbackUrl: '/app',
        redirect: true
      })

      if (result?.error) {
        toast({
          title: 'Erro',
          description: 'Falha ao conectar com Google.'
        })
      }
    } catch (error) {
      console.error('Google Sign In Error:', error)
      toast({
        title: 'Erro',
        description: 'Falha ao conectar com Google.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="mx-auto w-[380px] border-none">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-semibold">
          Faça login na Help Mind
        </CardTitle>
        <CardDescription>
          Mantenha-se organizado e tome decisões informadas sem esforço
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mt-3 flex flex-col w-full space-y-2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                {...form.register('email')}
              />
            </div>
            <Button
              className="w-full"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? 'Sending...' : 'Send Magic Link'}
            </Button>
          </form>
          <Button
            onClick={handleGoogleSignIn}
            className="w-full mt-4"
            variant="outline"
            disabled={isLoading}
          >
            {isLoading ? (
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Image
                alt="logo google"
                width={20}
                height={20}
                src={'/logos/google.svg'}
                className="mr-2"
              />
            )}
            {isLoading ? 'Entrando...' : 'Sign in with Google'}
          </Button>
        </div>
      </CardContent>
      <Separator className="my-4 mx-auto" />
      <CardFooter>
        <CardDescription className="text-xs">
          Ao clicar em continuar, você reconhece que leu e concorda com os
          termos da Help Mind{' '}
          <Link href={'#'} className="underline">
            Termos de serviço
          </Link>{' '}
          e{' '}
          <Link href={'#'} className="underline">
            Politica de privacidade
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  )
}