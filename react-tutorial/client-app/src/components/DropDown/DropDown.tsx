import { Listbox, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'
import * as React from 'react'
import { DropDownType } from '../../types'

export interface IDropDownProps {
  data: DropDownType[]
  value: DropDownType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (e: any) => void
  width: number
}

export const DropDown = ({ data, width, ...props }: IDropDownProps) => {
  return (
    <div className="min-w-[100px]" style={{ width: width }}>
      <Listbox {...props}>
        <div className="relative">
          <Listbox.Button className="relative cursor-default flex bg-white w-full border-[1px] border-gray-200 border-solid rounded-md shadow text-left pl-3 py-1">
            <span className="grow truncate">{props.value.text}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-300"
            >
              <path
                fillRule="evenodd"
                d="M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </Listbox.Button>
          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 bg-white border-[1px] border-gray-200 border-solid rounded-md shadow text-left mt-1 overflow-y-scroll overflow-x-hidden max-h-[25vh]">
              {data.map((d) => (
                <Listbox.Option
                  className={({ active }) =>
                    `relative py-1 ${
                      active ? 'bg-violet-200 text-violet-900' : ''
                    }`
                  }
                  key={d.value}
                  value={d}
                >
                  {({ selected }) => (
                    <motion.div
                      className="w-full truncate"
                      whileHover={{ scale: 1.005 }}
                    >
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-violet-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        </span>
                      ) : null}
                      <span className="pl-10 w-full">{d.text}</span>
                    </motion.div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
