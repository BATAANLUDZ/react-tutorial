import { Switch } from '@headlessui/react'
import { Fragment } from 'react'

interface IToggleProps {
  checked: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (e: any) => void
}

export const Toggle = (props: IToggleProps) => {
  return (
    <Switch {...props} as={Fragment}>
      {({ checked }) => (
        /* Use the `checked` state to conditionally style the button. */
        <button
          className={`${
            checked
              ? "bg-red-800 after:content-['WFH'] after:text-white after:absolute after:left-[17px]"
              : "bg-gray-200 after:content-['F2F'] after:ml-3 text-red-800"
          } relative inline-flex h-10 w-24 items-center rounded-full font-bold shadow-md font-orbit`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              checked ? 'translate-x-[59px]' : 'translate-x-1'
            } inline-block h-8 w-8 rounded-full bg-white transition shadow-md`}
          />
        </button>
      )}
    </Switch>
  )
}
