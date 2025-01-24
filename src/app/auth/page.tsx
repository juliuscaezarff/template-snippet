import { AuthForm } from './_components/auth-form'
import Image from 'next/image'

export default function Page() {
  return (
    <main>
      <div className="min-h-screen flex px-3 py-3">
        <div className="relative hidden w-2/3 lg:block">
          <Image
            src="/bg-gradient.jpeg"
            alt="Imagem de login"
            layout="fill"
            objectFit="cover"
            className="rounded-lg border border-border shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
          />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <AuthForm />
        </div>
      </div>
    </main>
  )
}
