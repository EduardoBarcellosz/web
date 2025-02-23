import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import {
  BadgeCheck,
  Copy,
  Link,
  Medal,
  MousePointer,
  MousePointerClick,
} from 'lucide-react'
import Image from 'next/image'
import logo from '../../assets/logo.svg'
import { Ranking } from './ranking'

export default function InvitePage() {
  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 felx-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="devstage" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none ">
            Inscricao confirmada!
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para o seu e-mail.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-heading">Indique e Ganhe</h2>
            <p>
              Convide mais pessoas para o evento e concorra ao evento e concorra
              a prêmios exclusivos! É so compartilhar o link abaixo e acompanhar
              as inscriçãoes.
            </p>
          </div>

          <InputRoot>
            <InputIcon>
              <Link className="size-5" />
            </InputIcon>

            <InputField
              readOnly
              defaultValue="https://localhost:3000/invite/1234"
            />
            <IconButton className="-mr-2">
              <Copy />
            </IconButton>
          </InputRoot>
          
        </div>
      </div>

      <Ranking />
    </div>
  )
}
