import { type ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      className={twMerge(
        'p-1.5 bg-gray-500 rounded-md text-blue cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900',
        className
      )}
      {...props}
      // usada para espalhar (spread) todas as propriedades recebidas pelo componente Button no elemento <button>
      // isso tambem faz com que se className for passado como propriedade, ele sobrescreve as propriedades do componente
    />
  )
}

//twMerge é uma função que recebe uma lista de strings e retorna uma string com todas as classes combinadas e sem conflitos
//o props no final do componente é usado para espalhar todas as propriedades recebidas pelo componente Button no elemento <button>
