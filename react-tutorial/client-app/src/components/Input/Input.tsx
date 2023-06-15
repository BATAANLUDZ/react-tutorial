import * as React from 'react'
import { ComponentPropsWithoutRef } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IInputProps
  extends Omit<React.ComponentPropsWithRef<'input'>, 'placeholder'> {
  /**
   *  Determine if input is search
   */
  isSearch?: boolean
  /**
   *  width of the input (min of 200)
   */
  width?: number
  /**
   * placeholder
   */
  placeholder?: string
  /**
   * error message
   */
  error: string
}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ placeholder = '', width = 200, isSearch = false, ...props }, ref) => {
    return (
      <div
        className={`relative flex flex-row items-center min-w-[200px]`}
        style={{ width: width }}
      >
        {isSearch ? (
          <svg
            className={`w-5 h-5 text-${
              props.error ? 'red-500' : 'gray-300'
            } pointer-events-none absolute right-0 mr-1`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        ) : null}

        <input
          className={`peer focus:ring-2 ${
            props.error ? 'ring-red-300' : 'ring-black'
          } w-full pl-3 ${
            props.error ? 'border-red-500' : 'border-gray-300'
          } border-solid border-[1px] shadow focus:outline-none rounded-md py-1 bg-red-500/0 -z-0`}
          {...props}
          ref={ref}
        ></input>
        <div
          className={`pointer-events-none bg-white  absolute p-0 px-[2.5px] rounded-full left-3 peer-focus:-translate-y-[18px] peer-focus:scale-[0.6] ${
            props.error
              ? 'peer-focus:[&>*]:text-red-500'
              : 'peer-focus:[&>*]:text-black'
          } peer-focus:[&>*]:tracking-wider transition peer-focus:font-semibold ease-in-out duration-150 origin-left`}
        >
          <p className={`text-${props.error ? 'red-500' : 'gray-300'}`}>
            {placeholder}
          </p>
        </div>
        {props.error ? (
          <div className="absolute text-[8px] bottom-[-12px] left-1 text-red-500 font-bold">
            <span>{props.error}</span>
          </div>
        ) : null}
      </div>
    )
  },
)
