import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IButtonProps extends ComponentProps<'button'> {}

export const Button = (props: IButtonProps) => {
  return <button {...props}>Button</button>
}
