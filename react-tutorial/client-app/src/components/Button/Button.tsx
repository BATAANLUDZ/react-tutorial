import { ComponentProps } from 'react'
import { motion } from 'framer-motion'
import { ButtonStyle } from '../../helpers/enums'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IButtonProps
  extends Pick<ComponentProps<'button'>, 'className' | 'onClick'> {
  //     /**
  //      * button text
  //      */
  text: string
  /**
   * button type if priumary or secondary
   */
  btnType: ButtonStyle
}

export const Button = ({ className, btnType, ...props }: IButtonProps) => {
  return (
    <motion.button
      className={`rounded-lg shadow-md border-[1px]  border-opacity-40 border-solid px-2 py-1 ${className} ${
        btnType == ButtonStyle.Primary
          ? 'border-gray-300'
          : 'bg-black text-white'
      }`}
      {...props}
    >
      {props.text}
    </motion.button>
  )
}
