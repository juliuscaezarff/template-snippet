'use client'

import { sendFeebackAction } from '@/actions/support/send-feedback-action'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Textarea } from '@/components/ui/textarea'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useAction } from 'next-safe-action/hooks'
import { useState } from 'react'

export function FeedbackForm() {
  const [message, setMessage] = useState('')

  const action = useAction(sendFeebackAction, {
    onSuccess: () => {
      setMessage('')
    }
  })

  return (
    <Popover>
      <PopoverTrigger asChild className="hidden md:block">
        <Button
          variant="outline"
          className="font-normal h-[32px] p-0 px-3 text-xs text-[#878787]"
        >
          Feedback
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[320px] h-[200px]"
        sideOffset={10}
        align="end"
      >
        {action.status === 'hasSucceeded' ? (
          <div className="flex items-center justify-center flex-col space-y-1 mt-10 text-center">
            <p className="font-medium text-sm">Obrigado pelo seu feedback!</p>
            <p className="text-sm text-[#4C4C4C]">
              Retornaremos o mais breve possível
            </p>
          </div>
        ) : (
          <form className="space-y-4">
            <Textarea
              name="message"
              value={message}
              required
              autoFocus
              placeholder="Ideias para melhorar esta página ou problemas que você está enfrentando."
              className="resize-none h-[120px]"
              onChange={evt => setMessage(evt.target.value)}
            />

            <div className="mt-1 flex items-center justify-end">
              <Button
                type="button"
                onClick={() => {
                  action.execute({ message: message })
                }}
                disabled={message.length === 0 || action.status === 'executing'}
              >
                {action.status === 'executing' ? (
                  <ReloadIcon className="h-4 w-4 animate-spin" />
                ) : (
                  'Enviar'
                )}
              </Button>
            </div>
          </form>
        )}
      </PopoverContent>
    </Popover>
  )
}