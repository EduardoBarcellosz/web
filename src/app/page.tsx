import { Button } from '@/components/button'
import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Copy } from 'lucide-react'
import { Mail } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <Button type="submit"> Enviar </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <div>
        <InputRoot>
          <InputIcon>
            <Mail className="size-5" />
          </InputIcon>
          <InputField className="flex-1 outline-0 placeholder-gray-400" />
        </InputRoot>
      </div>
    </main>
  )
}
