import { DropDown } from './DropDown'
import { Meta, StoryObj } from '@storybook/react'
import { DropDownType } from '../../types'
import { useState } from 'react'

const meta: Meta<typeof DropDown> = {
  title: 'Components/DropDown',
  component: DropDown,
  tags: ['autodocs'],
}

export default meta

type Template = StoryObj<typeof meta>

const data: DropDownType[] = [
  { value: 1, text: 'Ludz' },
  { value: 2, text: 'aaaa' },
  { value: 3, text: 'ssss' },
  { value: 4, text: 'xxxx' },
]

const DefaultWithHook = () => {
  const [selected, setSelected] = useState<DropDownType>(data[0])

  return (
    <DropDown data={data} value={selected} onChange={setSelected} width={60} />
  )
}

export const Default: Template = {
  render: () => <DefaultWithHook />,
}
