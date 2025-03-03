'use client'

import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { subscribeToEvent } from '@/http/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail válido'),
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  })

  async function onSubscribe({ name, email }: SubscriptionSchema) {
    const { subscriberId } = await subscribeToEvent({ name, email })
    console.log(subscriberId)
    router.push(`/invite/${subscriberId}`)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading fomt-semibold text-gray-200 text-xl">
        inscrição
      </h2>
      <div className="space-y-3">
        <InputRoot>
          <InputIcon>
            <User />
          </InputIcon>
          <InputField
            type="text"
            placeholder="Nome Completo"
            {...register('name')}
          />
        </InputRoot>

        {errors.name && (
          <p className="text-danger text-xs font-semibold">
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField
            type="email"
            placeholder="E-mail"
            {...register('email')}
          />
        </InputRoot>
        {errors.email && (
          <p className="text-danger text-xs font-semibold">
            {errors.email.message}
          </p>
        )}
      </div>
      <Button type="submit">Inscrever-se</Button>
    </form>
  )
}
