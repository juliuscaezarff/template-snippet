'use server'

import { actionClient } from '@/lib/create-safe-action'
import { FeedbackFormSchema } from '../schema'

export const sendFeebackAction = actionClient
  .schema(FeedbackFormSchema)
  .action(async ({ parsedInput: { message } }) => {
    try {
      const messageData = {
        embeds: [
          {
            title: 'Feedback dos usuários',
            color: 0x4983f5,
            fields: [
              {
                name: 'Feedback',
                value: message,
              },
            ],
          },
        ]
      }

      const response = await fetch(process.env.DISCORD_WEBHOOK_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageData)
      })

      if (!response.ok) {
        return { error: 'Ocorreu um erro ao enviar a mensagem' }
      }

      return { success: true }
    } catch (error) {
      return { error: 'Erro de conexão' }
    }
  })