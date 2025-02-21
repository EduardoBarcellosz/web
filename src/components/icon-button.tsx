import { type ComponentProps, ReactNode } from 'react'

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton(props: IconButtonProps) {
  return (
    <button
      className="p-1.5 
        bg-gray-500 
        rounded-md 
        text-blue 
        cursor-pointer 
        transition-colors 
        duration-300 
        hover:bg-blue
        hover:text-gray-900"
      {...props} // usada para espalhar (spread) todas as propriedades recebidas pelo componente Button no elemento <button>
    />
  )
}
